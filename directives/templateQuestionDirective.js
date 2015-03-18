angular.module("EvalApp").directive("templateQuestion", function ($window, $compile){

	return {
		restrict: "A",
		scope: {
			templ: "=templateQuestion",
			lang: "=lang"
		},

		link: function(scope, element, attr){

			//Returns the tmeplate url.
			scope.contentUrl = function () {

				return "templates/" + scope.templ.Type + "TemplateQuestion.html";
			}

			//If language is icelandic.
			if(scope.lang === 0){
				scope.question = scope.templ.Text;
				scope.langu = 0;
			}
			//If language is english.
			else if(scope.lang === 1){
				scope.question = scope.templ.TextEN;
				scope.langu = 1;
			}	
			//Text, single or multiple.	
			scope.qType = scope.templ.Type;
			
			if(scope.qType === "multiple" || scope.qType === "single"){
				//Get answers.
				scope.answers = scope.templ.Answers;
			}

		},

		template: "<div ng-include='contentUrl()'></div>"


	}
	
});