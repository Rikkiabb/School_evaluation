angular.module('EvalApp').controller('EvaluationController', ["$scope", "$modalInstance", "toaster", "studentFactory", "TEMPLATE", "evaluationFactory",
function ($scope, $modalInstance, toaster, studentFactory, TEMPLATE, evaluationFactory) {

	$scope.courseQ = [];
	$scope.teacherQ = [];
	$scope.qObjects = [];

	// building courseQuestion objects
	var array = TEMPLATE.template.CourseQuestions;
	for(var i = 0; i < array.length; i++){
		var obj = {
			question: array[i],
			answers: [],
			ID : array[i].ID
		};

		$scope.courseQ.push(obj);
	}

	// building teacherQuestion objects
	var tArr = TEMPLATE.template.TeacherQuestions;
	console.log("teach: ",TEMPLATE);
	for(var k = 0; k < TEMPLATE.teachers.length; k++){
		console.log("k:",k);
		var name = TEMPLATE.teachers[k].FullName;
		for(var i = 0; i < tArr.length; i++){
			var obj = {
				question: tArr[i],
				answers: [],
				ID: k + "_" + tArr[i].ID,
				tName: name,
				SSN: TEMPLATE.teachers[k].SSN
			};
			name = "";
			$scope.teacherQ.push(obj);
		}
	}
	$scope.questionCount = TEMPLATE.template.TeacherQuestions.length;
	$scope.template = TEMPLATE.template;
	$scope.teachers = TEMPLATE.teachers;

	function buildObj(QID, SSN, val){
		var qObj = {
				QuestionID: QID,
				TeacherSSN: SSN,
				Value: val
			};
		$scope.qObjects.push(qObj);
	}

	$scope.save = function () {

		var arr = $scope.courseQ;
		var val;
		for(var i = 0; i < arr.length; i++){
			if(arr[i].question.Type === "text"){
				val = arr[i].answers[0];
				buildObj(arr[i].question.ID, '', val);
			}

			else if(arr[i].question.Type === "single"){
				val = arr[i].answers;
				buildObj(arr[i].question.ID, '', val);
			}

			else if(arr[i].question.Type === "multiple"){

				for(h = 0; h < arr[i].answers.length; h++){
					val = ''
					val += arr[i].answers[h];
					buildObj(arr[i].question.ID, '', val);
				}
			}

		}

		var tArr = $scope.teacherQ;
		for(var i = 0; i < tArr.length; i++){
			
			if(tArr[i].question.Type === "text"){
				val = tArr[i].answers[0];
				buildObj(tArr[i].question.ID, tArr[i].SSN, val);
			}

			else if(tArr[i].question.Type === "single"){
				val = tArr[i].answers;
				buildObj(tArr[i].question.ID, tArr[i].SSN, val);
			}

			else if(tArr[i].question.Type === "multiple"){

				for(h = 0; h < tArr[i].answers.length; h++){
					val = ''
					val += tArr[i].answers[h];
					buildObj(tArr[i].question.ID, tArr[i].SSN, val);
				}
			}
		}
		//console.log("---->",$scope.qObjects,"<-----");
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