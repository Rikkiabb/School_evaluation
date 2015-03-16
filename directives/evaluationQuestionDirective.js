angular.module("EvalApp").directive("evaluationQuestion", function ($window, $compile){

	return {
		restrict: "A",

		scope: {
			templ: "=evaluationQuestion"
		},


		link: function(scope, element, attr){
			
			// scope.contentUrl = function () {
			// 	return "templates/" + scope.templ.Type + "EvalQuestion.html";
			// }

			var index = attr.qIndex;
			scope.question = scope.templ.Text;
			
			scope.qType = scope.templ.Type;
			if(scope.templ.Type === 'text'){
				scope.QID = "text_" + scope.templ.ID + "_" + index;
				var quest = angular.element("<div><p>" + scope.question + "</p>");
				var input = angular.element("<input type='text' ng-model='" + scope.QID + "' ></input></div>");
				compiled = $compile(quest);
				var a = quest.append(input);
				element.parent().append(a);
				$compile(element.contents())(scope);
				attr.type = "text";
			}
			else if(scope.templ.Type === 'single' || scope.templ.Type === 'multiple'){
				scope.answers = scope.templ.Answers;
			}
			else
			{
				attr.type = "radio";
			}

		}

		// template: "<div ng-include='contentUrl()'></div>"

	}
	
});