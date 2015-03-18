angular.module("EvalApp").factory("adminFactory", ["$http", "SERVER", function($http, SERVER){

	return {

		addTemplate: function(template){

			$http.post(SERVER + "evaluationtemplates", template)
				.success(function(data){
					//TODO: GIVE MESSAGE
				})
				.error(function(data, status){
					if(status === 401){
						//TODO: ERROR MESSAGE
					}
				});
		},

		getTemplates: function(callback){

			$http.get(SERVER + "evaluationtemplates")
				.success(function(data){
					console.log(data);
					callback(data);
				})
				.error(function(data, status){
					if(status === 401){
						console.log("Error");
					}
				});
		},

		getTemplateById: function(id, callback){

			$http.get(SERVER + "evaluationtemplates/" + id)
				.success(function(data){
					console.log(data);
					callback(data);
				})
				.error(function(data, status){
					if(status === 401){
						console.log("Error");
					}
				});
		},

		createEvaluation: function(obj){
			$http.post(SERVER + "evaluations/", obj)
				.success(function(data){
					console.log(data);
				})
				.error(function(data, status){
					if(status === 401){
						console.log("Error");
					}
				});
		},

		getEvaluations: function (callback) {
			$http.get(SERVER + "evaluations")
				.success(function(data){
					console.log(data);
					callback(data);
				})
				.error(function(data, status){
					if(status === 401){
						console.log("Error");
					}
				});
		},

		getEvalResults: function (id, callback) {
			$http.get(SERVER + "evaluations/" + id)
				.success(function(data){
					// console.log(data);
					callback(data);
				})
				.error(function(data, status){
					if(status === 401){
						console.log("Error");
					}
				});
		},

		getTeachers: function (cID, semester, callback) {
			$http.get(SERVER + "courses/" + cID + "/" + semester + "/teachers")
				.success(function(data){
					
					callback(data);
				})
				.error(function(data, status){
					if(status === 401){
						console.log("Error");
					}
				});
		}
	};

}]);