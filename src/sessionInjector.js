angular.module("EvalApp").factory("sessionInjector", function(sessionService){

	return{

		request: function(config){
			//If token is not null
			if(sessionService.getToken()){
				//Set authorization header.
				config.headers['Authorization'] = "Basic " + sessionService.getToken();
			}
			return config;
		}
	};
});

angular.module("EvalApp").config(['$httpProvider', function($httpProvider) {  
    //Push injector to provider.
    $httpProvider.interceptors.push('sessionInjector');
}]);