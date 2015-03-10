angular.module("EvalApp").factory('loginFactory', function($http, SERVER, sessionService){
	return{
		login: function(username, password, callback){
			$http.post(SERVER + "login", {user: username, pass: password})
				.success(function(data){
					console.log(data);
					sessionService.setToken(data.Token);
					callback();
				})
				.error(function(data, status){
					if(status === 401){
						console.log("Error");
					}
				});
		}
	}
});