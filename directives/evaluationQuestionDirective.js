angular.module("EvalApp").directive("evaluationQuestion", function ($window, $compile){

	return {
		restrict: "A",
		replace: true,
		scope: {
			templ: "=evaluationQuestion"
		},

		link: function(scope, element, attr){
			console.log("---------->",scope.templ.SSN,"<---------")
			scope.contentUrl = function () {
				if(scope.templ.question.Type === "multiple"){
					return "templates/" + scope.templ.question.Type + "eEvalQuestion.html";
				}
				return "templates/" + scope.templ.question.Type + "EvalQuestion.html";
			}


			
			scope.index = attr.qIndex;
			scope.question = scope.templ.question.Text;
			scope.isTeach = false;
			
			scope.qType = scope.templ.question.Type;
			// console.log(scope.qType);
			if(scope.templ.question.Type === 'text'){
				// scope.QID = "text_" + scope.templ.ID + "_" + index;
				// var quest = angular.element("<div><p>" + scope.question + "</p>");
				// var input = angular.element("<input type='text' ng-model='" + scope.QID + "' ></input></div>");
				// compiled = $compile(quest);
				// var a = quest.append(input);
				// element.parent().append(a);
				// $compile(element.contents())(scope);
				// attr.type = "text";
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