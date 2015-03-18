angular.module('EvalApp').controller('EvaluationController', ["$scope", "$modalInstance", "toaster", "studentFactory", "TEMPLATE", "evaluationFactory",
function ($scope, $modalInstance, toaster, studentFactory, TEMPLATE, evaluationFactory) {

	$scope.courseQ = [];
	$scope.teacherQ = [];
	$scope.qObjects = [];

	$scope.questionCount = TEMPLATE.template.TeacherQuestions.length;
	$scope.template = TEMPLATE.template;
	$scope.teachers = TEMPLATE.teachers;

	$scope.showLanguage = "isl"

	$scope.changeLang = function(lang){
		$scope.showLanguage = lang;
	};

	// building courseQuestion objects
	$scope.array = TEMPLATE.template.CourseQuestions;

	for(var i = 0; i < $scope.array.length; i++){
		$scope.obj = {
			question: $scope.array[i],
			answers: [],
			ID : $scope.array[i].ID
		};
		$scope.courseQ.push($scope.obj);
	}

	// building teacherQuestion objects
	$scope.tArr = TEMPLATE.template.TeacherQuestions;

	for(var k = 0; k < TEMPLATE.teachers.length; k++){

		$scope.name = TEMPLATE.teachers[k].FullName;

		for(var i = 0; i < $scope.tArr.length; i++){
			$scope.obj = {
				question: $scope.tArr[i],
				answers: [],
				ID: k + "_" + $scope.tArr[i].ID,
				tName: $scope.name,
				SSN: TEMPLATE.teachers[k].SSN
			};
			$scope.name = "";
			$scope.teacherQ.push($scope.obj);
		}
	}


	function buildObj(QID, SSN, val){
		$scope.qObj = {
				QuestionID: QID,
				TeacherSSN: SSN,
				Value: val
			};
		$scope.qObjects.push($scope.qObj);
	}

	$scope.save = function () {

		for(var i = 0; i < $scope.courseQ.length; i++){
			if($scope.courseQ[i].question.Type === "text"){
				$scope.cVal = $scope.courseQ[i].answers[0];
				buildObj($scope.courseQ[i].question.ID, '', $scope.cVal);
			}

			else if($scope.courseQ[i].question.Type === "single"){
				$scope.cVal = $scope.courseQ[i].answers;
				buildObj($scope.courseQ[i].question.ID, '', $scope.cVal);
			}

			else if($scope.courseQ[i].question.Type === "multiple"){

				for(var h = 0; h < $scope.courseQ[i].answers.length; h++){
					$scope.cVal = ''
					$scope.cVal += $scope.courseQ[i].answers[h];
					buildObj($scope.courseQ[i].question.ID, '', $scope.cVal);
				}
			}

		}

		for(var i = 0; i < $scope.teacherQ.length; i++){
			
			if($scope.teacherQ[i].question.Type === "text"){
				$scope.tVal = $scope.teacherQ[i].answers[0];
				buildObj($scope.teacherQ[i].question.ID, $scope.teacherQ[i].SSN, $scope.tVal);
			}

			else if($scope.teacherQ[i].question.Type === "single"){
				$scope.tVal = $scope.teacherQ[i].answers;
				buildObj($scope.teacherQ[i].question.ID, $scope.teacherQ[i].SSN, $scope.tVal);
			}

			else if($scope.teacherQ[i].question.Type === "multiple"){

				for(h = 0; h < $scope.teacherQ[i].answers.length; h++){
					$scope.tVal = ''
					$scope.tVal += $scope.teacherQ[i].answers[h];
					buildObj($scope.teacherQ[i].question.ID, $scope.teacherQ[i].SSN, $scope.tVal);
				}
			}
		}
		evaluationFactory.addEvalQuestion(TEMPLATE.course,
			TEMPLATE.semester,
			TEMPLATE.evalID,
			$scope.qObjects
		);
		$modalInstance.close();
	}

	// $modalInstance.close();

	// $scope.ok = function () {
		
	// 	$scope.templateObj = {
	// 		Title: $scope.titleIS,
	// 		TitleEN: $scope.titleENG,
	// 		IntroText: $scope.introIS,
	// 		IntroTextEN: $scope.introENG,
	// 		CourseQuestions: $scope.courseQuestions,
	// 		TeacherQuestions: $scope.teacherQuestions
	// 	};

	// 	adminFactory.addTemplate($scope.templateObj);
	// 	$modalInstance.close();
	// };

	// $scope.cancel = function () {
	// 	console.log("TODO: ERASE changes");
	// 	$modalInstance.dismiss('cancel');
	// };
}]);