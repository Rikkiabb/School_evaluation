angular.module('EvalApp').controller('TemplateByIdController', ["$scope", "$modalInstance", "adminFactory", "ID",
function ($scope, $modalInstance, adminFactory, ID) {

	$scope.template = {};

	adminFactory.getTemplateById(ID, function(template){
		$scope.template = template;
	});

	$scope.postEval = function(){
		$scope.startDate = new Date("October 13, 2013 11:13:00");
		$scope.endDate = new Date("October 13, 2015 11:13:00");

		$scope.newEval = {
			TemplateID: ID,
			StartDate: $scope.startDate.toISOString(),
			EndDate: $scope.endDate.toISOString()

		};

		adminFactory.createEvaluation($scope.newEval);
		$modalInstance.close();
	};

}]);