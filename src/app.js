
angular.module("EvalApp", ['ngRoute', 'angularMoment', 'toaster', 'ui.bootstrap', 'ngTagsInput', 'checklist-model']);

angular.module("EvalApp").constant("SERVER", "http://dispatch.ru.is/h15/api/v1/");

angular.module("EvalApp").config(
	function($routeProvider){
		$routeProvider
		.when("/login", {templateUrl: "views/login.html", controller:"LoginController"})
		.when("/student", {templateUrl: "views/student.html", controller:"StudentController"})
		.when("/admin", {templateUrl: "views/admin.html", controller:"AdminController"})
		.otherwise({redirectTo: "/login"});
	}
);
