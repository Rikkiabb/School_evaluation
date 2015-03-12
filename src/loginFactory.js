angular.module("EvalApp").factory('loginFactory', function($http, SERVER, sessionService, $location){
	return{
		login: function(username, password, callback){
			$http.post(SERVER + "login", {user: username, pass: password})
				.success(function(data){
					console.log(data);
					sessionService.setToken(data.Token);
					if(data.User.Role === "admin"){
						$location.path("/admin");
					}
					// callback();
				})
				.error(function(data, status){
					if(status === 401){
						console.log("Error");
					}
				});
		}
	}
});