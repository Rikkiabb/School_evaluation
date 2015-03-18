angular.module("EvalApp").factory("adminFactory", ["$http", "SERVER", "toaster", function($http, SERVER, toaster){

	return {

		addTemplate: function(template){

			$http.post(SERVER + "evaluationtemplates", template)
				.success(function(data){
					toaster.pop('success', 'YES!', 'You have added a template to your collection!.');
				})
				.error(function(data, status){
					if(status === 400){
						toaster.pop('error', 'ERROR!', 'Template must contain at least one question.');
					}
				});
		},

		getTemplates: function(callback){

			$http.get(SERVER + "evaluationtemplates")
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

		createEvaluation: function(obj){
			$http.post(SERVER + "evaluations/", obj)
				.success(function(data){
					
				})
				.error(function(data, status){
					
				});
		},

		getEvaluations: function (callback) {
			$http.get(SERVER + "evaluations")
				.success(function(data){
					callback(data);
				})
				.error(function(data, status){
				
				});
		},

		getEvalResults: function (id, callback) {
			$http.get(SERVER + "evaluations/" + id)
				.success(function(data){
					callback(data);
				})
				.error(function(data, status){

				});
		},

		getTeachers: function (cID, semester, callback) {
			$http.get(SERVER + "courses/" + cID + "/" + semester + "/teachers")
				.success(function(data){
					callback(data);
				})
				.error(function(data, status){

				});
		}
	};

}]);