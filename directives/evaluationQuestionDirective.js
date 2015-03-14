angular.module("EvalApp").directive("evaluationQuestion", function ($window){
	return {
		restrict: "A",

		scope: {
			templ: "=evaluationQuestion"
		},

		templateUrl: "templates/evalQuestion.html",

		link: function(scope, element, attr){
			console.log(scope.templ, "<-------");
			if(scope.templ.Type === 'text'){
				scope.test = "text";
			}
			else if(scope.templ.Type === 'single'){
				scope.test = "single";
			}
			else if(scope.templ.Type === 'multiple'){
				scope.test = "multiple";
			}

		}
	}
	
});