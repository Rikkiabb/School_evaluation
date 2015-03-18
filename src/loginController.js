angular.module("EvalApp").controller("LoginController", function($scope, $location, loginFactory, $http, SERVER, sessionService, toaster){

	$scope.username = undefined;
	$scope.password = undefined;

	$scope.login = function($event){
		
		//Login the user.
		loginFactory.login($scope.username, $scope.password);	
	};
});