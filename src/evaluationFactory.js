angular.module("EvalApp").factory("evaluationFactory", ["$http", "SERVER", function($http, SERVER){

	return {

		addEvalQuestion: function(course, semester, evalID, question){

			console.log("--->",question);
			$http.post(SERVER + "courses/" + course + "/" + semester + "/evaluations/" + evalID, question)
				.success(function(data){
					console.log("VIRKAR!!!!!");
				})
				.error(function(data, status){
					if(status === 401){
						console.log("Error", status);
					}
				});
		}
	}

}]);