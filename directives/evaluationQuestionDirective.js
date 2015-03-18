angular.module("EvalApp").directive("evaluationQuestion", function ($window, $compile){

	return {
		restrict: "A",
		replace: true,
		scope: {
			templ: "=evaluationQuestion",
			lang: "=lang"
		},

		link: function(scope, element, attr){
			
			//Returns the templateURL
			scope.contentUrl = function () {
				//Hax because multipleEvalQuestion.html wasn't working.
				if(scope.templ.question.Type === "multiple"){
					return "templates/" + scope.templ.question.Type + "eEvalQuestion.html";
				}
				return "templates/" + scope.templ.question.Type + "EvalQuestion.html";
			}

			//If language is Icelandic.
			if(scope.lang === 0){
				scope.question = scope.templ.question.Text;
				scope.langu = 0;
			}
			//If language is English.
			else if(scope.lang === 1){
				scope.question = scope.templ.question.TextEN;
				scope.langu = 1;
			}
			
			//To display input fields with no validation.
			scope.isTeach = false;
			
			//Text, single or multiple.
			scope.qType = scope.templ.question.Type;

			if(scope.qType === 'single' || scope.qType === 'multiple'){
				//Get answers.
				scope.answers = scope.templ.question.Answers;
			}

			
			if(scope.templ.SSN !== undefined){
				scope.isTeach = true;
			}
		},

		template: "<div ng-include='contentUrl()'></div>"


	}
	
});