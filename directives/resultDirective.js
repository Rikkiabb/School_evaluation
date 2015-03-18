angular.module("EvalApp").directive("result", function ($window, $compile){

	return {
		restrict: "A",
		scope: {
			templ: "=result"
		},

		link: function(scope, element, attr){

			scope.contentUrl = function () {

				return "templates/" + scope.templ.Type + "TemplateResult.html";
			}

			scope.max = 0;

			scope.question = scope.templ.Text;			
			scope.qType = scope.templ.Type;

			if(scope.qType === "text"){
				scope.answers = scope.templ.TextResults;
			}
			else if(scope.qType === "multiple" || scope.qType === "single"){
				scope.answers = scope.templ.OptionsResults;

				for(var i = 0; i < scope.answers.length; i++){
					scope.max += scope.answers[i].Count;
				}
			}

		},

		template: "<div ng-include='contentUrl()'></div>"


	}
	
});