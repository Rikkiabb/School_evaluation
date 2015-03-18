angular.module("EvalApp").factory("studentFactory", ["$http", "SERVER", "sessionService", 
	function($http, SERVER, sessionService){

	return{
		courses: function(callback){

			$http.get(SERVER + "my/courses")
				.success(function(data){
					callback(data);
				})
				.error(function(data, status){

				});

		},

		evaluations: function(callback){
			$http.get(SERVER + "my/evaluations")
				.success(function(data){
					callback(data);
				})
				.error(function(data, status){

				});

		},

		getTemplateById: function(id, callback){

			$http.get(SERVER + "evaluationtemplates/" + id)
				.success(function(data){
					callback(data);
				})
				.error(function(data, status){

				});
		},

		getEvaluationById: function(id, callback){

			$http.get(SERVER + "evaluations/" + id)
				.success(function(data){
					callback(data);
				})
				.error(function(data, status){

				});
		},

		getTeachers: function(cID, semester, callback) {
			$http.get(SERVER + "courses/" + cID + "/" + semester + "/teachers")
				.success(function(data){
					callback(data);
				})
				.error(function(data, status){

				});
		}

	}

}]);