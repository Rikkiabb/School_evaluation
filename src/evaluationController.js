angular.module('EvalApp').controller('EvaluationController', ["$scope", "$modalInstance", "toaster", "studentFactory", "TEMPLATE",
function ($scope, $modalInstance, toaster, studentFactory, TEMPLATE) {

	$scope.courseQ = [];
	$scope.teacherQ = [];

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
				tName: name
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


	$scope.save = function () {

		var arr = $scope.courseQ;
		for(var i = 0; i < arr.length; i++){
			
			if(arr[i].question.Type === "text"){
				
				console.log($scope.courseQ[i].answers);
				
			}
			else if(arr[i].question.Type === "single"){
				console.log($scope.courseQ[i].answers[0]);
			}
			else if(arr[i].question.Type === "multiple"){

				console.log($scope.courseQ[i].answers);
			}

		}
		console.log("--------------------");
		var arr = $scope.teacherQ;
		for(var i = 0; i < arr.length; i++){
			
			if(arr[i].question.Type === "text"){
				
				console.log($scope.teacherQ[i].answers);
				
			}
			else if(arr[i].question.Type === "single"){
				console.log($scope.teacherQ[i].answers[0]);
			}
			else if(arr[i].question.Type === "multiple"){

				console.log($scope.teacherQ[i].answers);
			}

		}

		

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