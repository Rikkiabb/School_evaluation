angular.module("EvalApp").directive("evaluationQuestion", function ($window){
	return {
		restrict: "E",

		templateUrl: "templates/evalQuestion.html",

		link: function(scope, element, attr){
			scope.question = attr.ngModel;
		}
	}
	
});