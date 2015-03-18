angular.module("EvalApp").directive("result", function ($window, $compile){

	return {
		restrict: "A",
		scope: {
			templ: "=result",
			lang: "=lang"
		},

		link: function(scope, element, attr){

			//Returns the template url.
			scope.contentUrl = function () {

				return "templates/" + scope.templ.Type + "TemplateResult.html";
			}

			//Number of answers.
			scope.max = 0;
			
			//If language is Icelandic.
			if(scope.lang === 0){
				scope.question = scope.templ.Text;
				scope.langu = 0;
			}
			//If language is English.
			else if(scope.lang === 1){
				scope.question = scope.templ.TextEN;
				scope.langu = 1;
			}	

			//Text, single or multiple.
			scope.qType = scope.templ.Type;

			if(scope.qType === "text"){
				//Get all the results.
				scope.answers = scope.templ.TextResults;
			}
			else if(scope.qType === "multiple" || scope.qType === "single"){
				//Get all the results.
				scope.answers = scope.templ.OptionsResults;

				//Count the number of answers.
				for(var i = 0; i < scope.answers.length; i++){
					scope.max += scope.answers[i].Count;
				}
			}

		},

		template: "<div ng-include='contentUrl()'></div>"


	}
	
});