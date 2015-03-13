angular.module("EvalApp").factory('loginFactory', function($http, $location, studentFactory, SERVER, sessionService){
	return{
		login: function(username, password, callback){
			$http.post(SERVER + "login", {user: username, pass: password})
				.success(function(data){
					console.log(data);
					sessionService.setToken(data.Token);
					if(username === 'admin'){
						$location.path("/admin");
					}else{
						studentFactory.courses(function(mc){
							studentFactory.evaluations(function(mc){
								$location.path("/student");
							});
						});
					}
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