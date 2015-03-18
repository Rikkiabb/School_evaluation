
angular.module("EvalApp").factory('loginFactory', function($http, $location, studentFactory, SERVER, sessionService, toaster){

	return{
		login: function(username, password){
			$http.post(SERVER + "login", {user: username, pass: password})
				.success(function(data){
					//Set user and token.
					sessionService.setToken(data.Token);
					sessionService.setUser(data.User);
					
					if(data.User.Role === "admin"){
						$location.path("/admin");
					}
					else if (data.User.Role = "student"){
						$location.path("/student");
					}
				})
				.error(function(data, status){
					if(status === 401){
						toaster.pop('error', 'Error!', 'Wrong user name or password.');
					}
				});
		}
	}
});