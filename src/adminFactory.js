angular.module("EvalApp").factory("adminFactory", ["$http", "SERVER", function($http, SERVER){

	return {

		addTemplate: function(template){

			$http.post(SERVER + "evaluationtemplates", template)
				.success(function(data){
					console.log(data);
					console.log("YES");
				})
				.error(function(data, status){
					if(status === 401){
						console.log("Error");
					}
				});
		}
	};

}]);