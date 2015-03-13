angular.module("EvalApp").factory("studentFactory", ["$http", "SERVER", "sessionService", 
	function($http, SERVER, sessionService){

	return{
		courses: function(callback){

			$http.get(SERVER + "my/courses")
				.success(function(data){
					console.log("COURSE");
					console.log(data);
					sessionService.setCourses(data);
					callback();
				})
				.error(function(data, status){
					if(status === 401){
						console.log("Error");
					}
				});

		},

		evaluations: function(callback){
			$http.get(SERVER + "my/evaluations")
				.success(function(data){
					console.log("EVAL");
					console.log(data);
					sessionService.setEvaluations(data);
					callback();
				})
				.error(function(data, status){
					if(status === 401){
						console.log("Error");
					}
				});

		}

	}

}]);