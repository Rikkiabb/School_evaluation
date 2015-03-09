angular.module("EvalApp").factory('loginFactory', function($http, SERVER){
	return{
		login: function(username, password){
			$http.post(SERVER + "login", {user: username, pass: password})
				.success(function(data){
					console.log(data);
				})
				.error(function(data, status){
					if(status === 401){
						console.log("Error");
					}
				});
		}
	}
});