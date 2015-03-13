angular.module("EvalApp").controller("LoginController", function($scope, $location, loginFactory, $http, SERVER, sessionService, toaster){

	$scope.username = undefined;
	$scope.password = undefined;

	$scope.login = function($event){
		if($event !== undefined){
			if($event.keyCode !== 13){
				return;
			}
		}
		if($scope.username === undefined){
			toaster.pop('error', 'Error!', 'You have to select a username.');
			return;
		}
		if($scope.password === undefined){
			toaster.pop('error', 'Error!', 'You have to select a password.');
			return;
		}
			
		loginFactory.login($scope.username, $scope.password);	
	};
});