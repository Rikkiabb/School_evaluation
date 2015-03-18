angular.module("EvalApp").factory('sessionService', function(){

	
	var authToken = null;
	var user = {};

	return{

		setToken: function(token){
			authToken = token;
		},

		getToken: function(){
			return authToken;
		},

		setUser: function(_user){
			user = _user;
		},

		getUser: function(){
			return user;
		}

	};
});