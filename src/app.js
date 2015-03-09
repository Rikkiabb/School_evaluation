
angular.module("EvalApp", []);

angular.module("EvalApp").controller('HomeController', function ($scope, testRescource) {

	// $scope.func = function(){
	$scope.helloWorld = {hello: "hello", world: "world"};		
	// };
});

angular.module("EvalApp").factory("testRescource", function () {
	return {
		test: function(arg){

		}
	};
});