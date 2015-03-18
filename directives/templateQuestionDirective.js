angular.module("EvalApp").directive("templateQuestion", function ($window, $compile){

	return {
		restrict: "A",
		scope: {
			templ: "=templateQuestion"
		},

		link: function(scope, element, attr){

			scope.contentUrl = function () {

				return "templates/" + scope.templ.Type + "TemplateQuestion.html";
			}

			scope.question = scope.templ.Text;
	
			scope.qType = scope.templ.Type;
			
			if(scope.qType === "multiple" || scope.qType === "single"){
				scope.answers = scope.templ.Answers;
			}

		},

		template: "<div ng-include='contentUrl()'></div>"


	}
	
});