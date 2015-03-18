angular.module('EvalApp').controller('EvaluationController', ["$scope", "$modalInstance", "toaster", "studentFactory", "TEMPLATE", "evaluationFactory",
function ($scope, $modalInstance, toaster, studentFactory, TEMPLATE, evaluationFactory) {


	$scope.courseQ = [];
	$scope.teacherQ = [];
	//Will contain answers of the student.
	$scope.qObjects = [];

	$scope.questionCount = TEMPLATE.template.TeacherQuestions.length;
	$scope.template = TEMPLATE.template;
	$scope.teachers = TEMPLATE.teachers;

	$scope.showLanguage = "isl"

	//Change the language of the quesitons.
	$scope.changeLang = function(lang){
		$scope.showLanguage = lang;
	};

	//for building courseQuestion objects
	$scope.array = TEMPLATE.template.CourseQuestions;

	//Build the course question arry to be sent to the directive.
	for(var i = 0; i < $scope.array.length; i++){
		$scope.obj = {
			question: $scope.array[i],
			answers: [],
			ID : $scope.array[i].ID
		};
		$scope.courseQ.push($scope.obj);
	}

	//For building teacherQuestion objects
	$scope.tArr = TEMPLATE.template.TeacherQuestions;

	//Build the teacher quesiton array to be sent to the directive.
	for(var k = 0; k < TEMPLATE.teachers.length; k++){

		//Will only be sent with object with the first question for the teacher.
		$scope.name = TEMPLATE.teachers[k].FullName;

		for(var i = 0; i < $scope.tArr.length; i++){
			$scope.obj = {
				question: $scope.tArr[i],
				answers: [],
				ID: k + "_" + $scope.tArr[i].ID,
				tName: $scope.name,
				SSN: TEMPLATE.teachers[k].SSN
			};
			//Clear teacher name. For displaying.
			$scope.name = "";
			$scope.teacherQ.push($scope.obj);
		}
	}


	//Add a object to the array that is sent to the server.
	function buildObj(QID, SSN, val){
		$scope.qObj = {
				QuestionID: QID,
				TeacherSSN: SSN,
				Value: val
			};
		$scope.qObjects.push($scope.qObj);
	}

	//Save students answers.
	$scope.save = function () {

		for(var i = 0; i < $scope.courseQ.length; i++){
			//If text then send a string.
			if($scope.courseQ[i].question.Type === "text"){
				$scope.cVal = $scope.courseQ[i].answers[0];
				buildObj($scope.courseQ[i].question.ID, '', $scope.cVal);
			}
			//If single then send the answer id.
			else if($scope.courseQ[i].question.Type === "single"){
				$scope.cVal = $scope.courseQ[i].answers;
				buildObj($scope.courseQ[i].question.ID, '', $scope.cVal);
			}
			//if multiple then send all answers id's that are selected.
			else if($scope.courseQ[i].question.Type === "multiple"){

				for(var h = 0; h < $scope.courseQ[i].answers.length; h++){
					$scope.cVal = ''
					$scope.cVal += $scope.courseQ[i].answers[h];
					buildObj($scope.courseQ[i].question.ID, '', $scope.cVal);
				}
			}

		}

		for(var i = 0; i < $scope.teacherQ.length; i++){
			//If text then send a string.
			if($scope.teacherQ[i].question.Type === "text"){
				$scope.tVal = $scope.teacherQ[i].answers[0];
				buildObj($scope.teacherQ[i].question.ID, $scope.teacherQ[i].SSN, $scope.tVal);
			}
			//If single then send the answer id.
			else if($scope.teacherQ[i].question.Type === "single"){
				$scope.tVal = $scope.teacherQ[i].answers;
				buildObj($scope.teacherQ[i].question.ID, $scope.teacherQ[i].SSN, $scope.tVal);
			}
			//if multiple then send all answers id's that are selected.
			else if($scope.teacherQ[i].question.Type === "multiple"){

				for(h = 0; h < $scope.teacherQ[i].answers.length; h++){
					$scope.tVal = ''
					$scope.tVal += $scope.teacherQ[i].answers[h];
					buildObj($scope.teacherQ[i].question.ID, $scope.teacherQ[i].SSN, $scope.tVal);
				}
			}
		}
		//Add the answers to the server.
		evaluationFactory.addEvalQuestion(TEMPLATE.course,
			TEMPLATE.semester,
			TEMPLATE.evalID,
			$scope.qObjects
		);
		//Close the modal.
		$modalInstance.close();
	}

}]);