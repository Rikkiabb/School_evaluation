
angular.module("EvalApp", []);

angular.module("EvalApp").controller('HomeController', function ($scope, testRescource) {

	$scope.firstFunc = function(){
		$scope.helloWorld = {hello: "hello", world: "world"};		
	};

	$scope.secondFunc = function(){

		testRescource.test($scope.user);
	}
});

angular.module("EvalApp").factory("testRescource", function () {
	return {
		test: function(arg){

		}
	};
});