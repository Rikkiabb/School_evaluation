angular.module('EvalApp').controller('EvaluationController', ["$scope", "$modalInstance", "toaster", "studentFactory", "TEMPLATE",
function ($scope, $modalInstance, toaster, studentFactory, TEMPLATE) {


	$scope.template = TEMPLATE;

	console.log("Eval Controller:", $scope.template);

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