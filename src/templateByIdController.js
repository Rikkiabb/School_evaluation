angular.module('EvalApp').controller('TemplateByIdController', ["$scope", "$modalInstance", "adminFactory", "ID",
function ($scope, $modalInstance, adminFactory, ID) {

	$scope.template = {};
	$scope.startDate = new Date();
	$scope.endDate = new Date();

	adminFactory.getTemplateById(ID, function(template){
		$scope.template = template;
		$scope.courseQuestions = template.CourseQuestions;
		$scope.teacherQuestions = template.TeacherQuestions;
	});

	$scope.postEval = function(){


		$scope.newEval = {
			TemplateID: ID,
			StartDate: $scope.startDate.toISOString(),
			EndDate: $scope.endDate.toISOString()

		};
		adminFactory.createEvaluation($scope.newEval);
		$modalInstance.close();
	};

}]);