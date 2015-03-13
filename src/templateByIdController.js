angular.module('EvalApp').controller('TemplateByIdController', ["$scope", "$modalInstance", "adminFactory", "ID",
function ($scope, $modalInstance, adminFactory, ID) {

	$scope.template = {};

	adminFactory.getTemplateById(ID, function(template){
		$scope.template = template;
	});

	$scope.postEval = function(){
		var startDate = new Date();
		var endDate = new Date();

		var newEval = {
			TemplateID: ID,
			StartDate: startDate.toISOString(),
			EndDate: endDate.toISOString()

		};

		adminFactory.createEvaluation(newEval, function(){
			console.log("YES");
		})
	};

}]);