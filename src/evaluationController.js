angular.module('EvalApp').controller('EvaluationController', ["$scope", "$modalInstance", "toaster", "studentFactory", "TEMPLATE",
function ($scope, $modalInstance, toaster, studentFactory, TEMPLATE) {

	$scope.courseQ = [];
	var array = TEMPLATE.template.CourseQuestions;
	for(var i = 0; i < array.length; i++){
		var obj = {
			question: array[i],
			answers: []
		};

		$scope.courseQ.push(obj);
	}

	$scope.template = TEMPLATE.template;
	
	$scope.teacherQ = TEMPLATE.template.TeacherQuestions;
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