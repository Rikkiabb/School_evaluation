angular.module("EvalApp").controller("AdminController", ["$scope", "$modal", "adminFactory", 
function($scope, $modal, adminFactory){

	$scope.templates = [];
	$scope.evaluations = [];
	$scope.showStatus = "closed";


	adminFactory.getTemplates(function(templates){
		$scope.templates = templates;
	});

	adminFactory.getEvaluations(function (evaluations){
		$scope.evaluations = evaluations;
	});

	$scope.changeTab = function(status){
		$scope.showStatus = status;
	}
	
	$scope.newTemplate = function () {

	    $scope.modalInstance = $modal.open({
	     	templateUrl: 'templateModalContent.html',
	      	controller: 'TemplateController',
	      	size: 'lg'
	    });

	    $scope.modalInstance.result.then(function () {
	      	adminFactory.getTemplates(function(templates){
				$scope.templates = templates;
			});
	    });
	};

	  

   $scope.getTemplateById = function (id) {

   		$scope.modalInstance = $modal.open({
	      	templateUrl: 'templateByIdModalContent.html',
	      	controller: 'TemplateByIdController',
	      	size: 'lg',
	      	resolve: {
        		ID: function () {
          			return id;
        		}
      		}
	    });
   		
   };

   $scope.getResults = function (id) {

   		adminFactory.getEvalResults(id, function(res){
   			$scope.modalInstance = $modal.open({
	      		templateUrl: 'ResultModalContent.html',
	      		controller: 'ResultController',
	      		size: 'lg',
	      		resolve: {
        			RESULT: function () {
          				return res;
        			}
      			}
	    	});
   		});
   	}	

}]);
