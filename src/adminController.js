angular.module("EvalApp").controller("AdminController", ["$scope", "$modal", function($scope, $modal){


	 $scope.open = function (size) {

	    $scope.modalInstance = $modal.open({
	      templateUrl: 'myModalContent.html',
	      controller: 'ModalInstanceController',
	      size: 'lg'
	    });

	    // modalInstance.result.then(function (selectedItem) {
	    //   $scope.selected = selectedItem;
	    // }, function () {
	    //   $log.info('Modal dismissed at: ' + new Date());
	    // });
	  };

}]);
