angular.module('EvalApp').controller('TemplateByIdController', ["$scope", "$modalInstance", "adminFactory", "ID",
function ($scope, $modalInstance, adminFactory, ID) {

	$scope.template = {};

	adminFactory.getTemplateById(ID, function(template){
		$scope.template = template;
	});

	$scope.postEval = function(){
		$scope.startDate = new Date();
		$scope.endDate = new Date();

		$scope.newEval = {
			TemplateID: ID,
			StartDate: $scope.startDate.toISOString(),
			EndDate: $scope.endDate.toISOString()

		};

		adminFactory.createEvaluation($scope.newEval);
		$modalInstance.close();
	};

}]);