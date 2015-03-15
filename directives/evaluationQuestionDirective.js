angular.module("EvalApp").directive("evaluationQuestion", function ($window){
	var url;
	return {
		restrict: "A",

		scope: {
			templ: "=evaluationQuestion"
		},


		link: function(scope, element, attr){
			
			scope.contentUrl = function () {
				return "templates/" + scope.templ.Type + "EvalQuestion.html";
			}

			console.log(scope.templ, "<-------");
			scope.question = scope.templ.Text;
			scope.qType = scope.templ.Type;
			if(scope.templ.Type === 'text'){

			}
			else if(scope.templ.Type === 'single' || scope.templ.Type === 'multiple'){
				scope.answers = scope.templ.Answers;
			}

		},

		template: "<div ng-include='contentUrl()'></div>"

	}
	
});