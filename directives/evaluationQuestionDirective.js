angular.module("EvalApp").directive("evaluationQuestion", function ($window, $compile){

	return {
		restrict: "A",
		replace: true,
		scope: {
			templ: "=evaluationQuestion",
			lang: "=lang"
		},

		link: function(scope, element, attr){
			scope.contentUrl = function () {
				if(scope.templ.question.Type === "multiple"){
					return "templates/" + scope.templ.question.Type + "eEvalQuestion.html";
				}
				return "templates/" + scope.templ.question.Type + "EvalQuestion.html";
			}

			if(scope.lang === 0){
				scope.question = scope.templ.question.Text;
				scope.langu = 0;
			}
			else if(scope.lang === 1){
				scope.question = scope.templ.question.TextEN;
				scope.langu = 1;
			}
			
			scope.isTeach = false;
			
			scope.qType = scope.templ.question.Type;

			if(scope.templ.question.Type === 'text'){

			}
			else if(scope.qType === 'single' || scope.qType === 'multiple'){
				scope.answers = scope.templ.question.Answers;
			}

			if(scope.templ.SSN !== undefined){
				scope.isTeach = true;
			}
		},

		template: "<div ng-include='contentUrl()'></div>"


	}
	
});