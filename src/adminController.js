angular.module("EvalApp").controller("AdminController", ["$scope", "$modal", "adminFactory", 
function($scope, $modal, adminFactory){

	$scope.templates = [];
	$scope.evaluations = [];
	//For displaying evaluations by status.
	$scope.showStatus = "closed";


	adminFactory.getTemplates(function(templates){
		$scope.templates = templates;
	});

	adminFactory.getEvaluations(function (evaluations){
		$scope.evaluations = evaluations;
	});

	//Change view of evaluations by status.
	$scope.changeTab = function(status){
		$scope.showStatus = status;
	}
	
	//Open the new template modal.
	$scope.newTemplate = function () {

		//Open modal.
	    $scope.modalInstance = $modal.open({
	     	templateUrl: 'templateModalContent.html',
	      	controller: 'TemplateController',
	      	size: 'lg'
	    });

	    //If saved, then get array of templates again.
	    $scope.modalInstance.result.then(function () {
	      	adminFactory.getTemplates(function(templates){
				$scope.templates = templates;
			});
	    });
	};

	  
   //Opens modal for viewing template by id.
   $scope.getTemplateById = function (id) {

   		//Open modal.
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

   //Gets the result of an eval.
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
