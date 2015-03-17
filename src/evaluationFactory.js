angular.module("EvalApp").factory("evaluationFactory", ["$http", "SERVER", function($http, SERVER){

	return {

		addEvalQuestion: function(course, semester, evalID, question){
			console.log("addQ: ",question);
			console.log("c: ", course, " s: ", semester, " e: ", evalID);
			// $http.post(SERVER + "courses/" + course + "/" + semester + "/evaluations/" + evalID, question)
			// 	.success(function(data){
			// 		console.log("VIRKAR!!!!!");
			// 	})
			// 	.error(function(data, status){
			// 		if(status === 401){
			// 			console.log("FOKKUP");
			// 		}
			// 		else{
			// 			console.log("FOKKUP status: ", status);
			// 		}
			// 	});
		}
	}

}]);