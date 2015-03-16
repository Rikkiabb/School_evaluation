angular.module('EvalApp').controller('EvaluationController', ["$scope", "$modalInstance", "toaster", "studentFactory", "TEMPLATE",
function ($scope, $modalInstance, toaster, studentFactory, TEMPLATE) {


	$scope.template = TEMPLATE.template;
	$scope.teachers = TEMPLATE.teachers;



	$scope.save = function () {

		var arr = $scope.template.TeacherQuestions;
		for(var i = 0; i < arr.length; i++){
			
			if(arr[i].Type === "text"){
				var ID = arr[i].ID;
				var ID2 = 0;
				var strengur = "text_" + ID + "_" + ID2;
				
				console.log(eval("$scope.text_" + ID + "_" + ID2));
				
				

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