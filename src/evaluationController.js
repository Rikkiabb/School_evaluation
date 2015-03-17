angular.module('EvalApp').controller('EvaluationController', ["$scope", "$modalInstance", "toaster", "studentFactory", "TEMPLATE", "evaluationFactory",
function ($scope, $modalInstance, toaster, studentFactory, TEMPLATE, evaluationFactory) {

	$scope.courseQ = [];
	$scope.teacherQ = [];
	$scope.qObjects = [];
	var array = TEMPLATE.template.CourseQuestions;
	for(var i = 0; i < array.length; i++){
		var obj = {
			question: array[i],
			answers: [],
			ID : array[i].ID
		};

		$scope.courseQ.push(obj);
	}

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
	
	//$scope.teacherQ = TEMPLATE.template.TeacherQuestions;
	$scope.teachers = TEMPLATE.teachers;

	// $scope.changeCheck = function(quest, value){

	// 	if(!quest.answers.indexOf(value) !== -1){

	// 		quest.answers.push(value);
	// 	}
	// }

// addEvalQuestion: function(course, semester, evalID, question){
	$scope.save = function () {

		var arr = $scope.courseQ;
		for(var i = 0; i < arr.length; i++){
			
			// if(arr[i].question.Type === "text"){
				
			// 	console.log($scope.courseQ[i].answers);
				
			// }
			// else if(arr[i].question.Type === "single"){
			// 	console.log($scope.courseQ[i].answers[0]);
			// }
			// else if(arr[i].question.Type === "multiple"){

			// 	console.log($scope.courseQ[i].answers);
			// }
			//for(h = 0; h < arr.answers.length; h)

			var qObj = {
					QuestionID: arr[i].question.ID,
					TeacherSSN: '',
					Value: arr[i].answers
					
				};

			$scope.qObjects.push(qObj);

		}
		//console.log("--------------------");
		var tArr = $scope.teacherQ;
		for(var i = 0; i < tArr.length; i++){
			
			// if(tArr[i].question.Type === "text"){
				
			// 	console.log($scope.teacherQ[i].answers);
				
			// }
			// else if(tArr[i].question.Type === "single"){
			// 	console.log($scope.teacherQ[i].answers[0]);
			// }
			// else if(tArr[i].question.Type === "multiple"){

			// 	console.log($scope.teacherQ[i].answers);
			// }
			console.log("arr:::::::::", tArr[i]);
			var qObj = {
					QuestionID: tArr[i].question.ID,
					TeacherSSN: tArr[i].SSN,
					Value: tArr[i].answers
					
				};

			$scope.qObjects.push(qObj);

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