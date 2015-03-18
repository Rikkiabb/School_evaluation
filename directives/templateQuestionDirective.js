angular.module("EvalApp").directive("templateQuestion", function ($window, $compile){

	return {
		restrict: "A",
		scope: {
			templ: "=templateQuestion"
		},

		link: function(scope, element, attr){

			//Returns the tmeplate url.
			scope.contentUrl = function () {

				return "templates/" + scope.templ.Type + "TemplateQuestion.html";
			}
	
			//Text, single or multiple.	
			scope.question = scope.templ.Text;
			scope.questionEN = scope.templ.TextEN;
	
			scope.qType = scope.templ.Type;
			
			if(scope.qType === "multiple" || scope.qType === "single"){
				//Get answers.
				scope.answers = scope.templ.Answers;
			}

		},

		template: "<div ng-include='contentUrl()'></div>"


	}
	
});