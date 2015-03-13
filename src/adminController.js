angular.module("EvalApp").controller("AdminController", ["$scope", "$modal", "adminFactory", 
function($scope, $modal, adminFactory){

	$scope.templates = [];
	adminFactory.getTemplates(function(templates){
		$scope.templates = templates;
	});

	

	
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

}]);
