angular.module('EvalApp').controller('TemplateByIdController', ["$scope", "$modalInstance", "adminFactory", "ID", "toaster",
function ($scope, $modalInstance, adminFactory, ID, toaster) {

	$scope.template = {};
	$scope.startDate = new Date();
	$scope.endDate = new Date();

	adminFactory.getTemplateById(ID, function(template){
		$scope.template = template;
		$scope.courseQuestions = template.CourseQuestions;
		$scope.teacherQuestions = template.TeacherQuestions;
	});

	$scope.postEval = function(){

		if(!$scope.Dates.$valid){

			toaster.pop('error', 'Error!', 'Please insert a start and end date.');
			return;
		}

		$scope.newEval = {
			TemplateID: ID,
			StartDate: $scope.startDate.toISOString(),
			EndDate: $scope.endDate.toISOString()

		};
		adminFactory.createEvaluation($scope.newEval);
		$modalInstance.close();
	};

}]);