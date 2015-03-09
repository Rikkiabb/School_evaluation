angular.module("EvalApp").controller("LoginController", function($scope, $location, loginFactory){
	$scope.login = function($event){
		if($event !== undefined){
			if($event.keyCode !== 13){
				return;
			}
		}
		if($scope.username === ''){
			console.log("ERORR");
			return;
		}
		if($scope.password === ''){
			console.log("ERORR");
			return;
		}
		loginFactory.login($scope.username, $scope.password);
	};
});