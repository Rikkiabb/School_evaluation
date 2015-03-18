angular.module("EvalApp").factory("evaluationFactory", ["$http", "SERVER", function($http, SERVER){

	return {

		addEvalQuestion: function(course, semester, evalID, question){
			$http.post(SERVER + "courses/" + course + "/" + semester + "/evaluations/" + evalID, question)
				.success(function(data){
					
				})
				.error(function(data, status){
					
				});
		}
	}

}]);