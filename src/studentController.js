angular.module("EvalApp").controller("StudentController", ["$scope", "sessionService", 
function($scope, sessionService){
	$scope.myCourses = [];
	$scope.myEval = [];
	$scope.myCourses = sessionService.getCourses();
	$scope.myEval = sessionService.getEvaluations();

}]);