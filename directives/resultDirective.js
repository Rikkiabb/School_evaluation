angular.module("EvalApp").directive("result", function ($window, $compile){

	return {
		restrict: "A",
		scope: {
			templ: "=result",
			lang: "=lang"
		},

		link: function(scope, element, attr){

			scope.contentUrl = function () {

				return "templates/" + scope.templ.Type + "TemplateResult.html";
			}

			scope.max = 0;
			
			if(scope.lang === 0){
				scope.question = scope.templ.Text;
				scope.langu = 0;
			}
			else if(scope.lang === 1){
				scope.question = scope.templ.TextEN;
				scope.langu = 1;
			}	

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