
angular.module("EvalApp", ['ngRoute', 'angularMoment', 'toaster', 'ui.bootstrap']);

angular.module("EvalApp").constant("SERVER", "http://dispatch.ru.is/h15/api/v1/");

angular.module("EvalApp").config(
	function($routeProvider){
		$routeProvider
		.when("/login", {templateUrl: "views/login.html", controller:"LoginController"})
		.when("/admin", {templateUrl: "views/admin.html", controller:"AdminController"})
		.otherwise({redirectTo: "/login"});
	}
);

// angular.module("EvalApp").controller('HomeController', function ($scope, testRescource) {

// 	$scope.firstFunc = function(){
// 		$scope.helloWorld = {hello: "hello", world: "world"};		
// 	};

// 	$scope.secondFunc = function(){

// 		testRescource.test($scope.user);
// 	}
// });

// angular.module("EvalApp").factory("testRescource", function () {
// 	return {
// 		test: function(arg){

// 		}
// 	};
// });