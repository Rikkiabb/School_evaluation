angular.module("EvalApp").factory('sessionService', function(){

	
	var authToken = null;

	return{

		setToken: function(token){

			authToken = token;
		},

		getToken: function(){
			return authToken;
		}
	};
});