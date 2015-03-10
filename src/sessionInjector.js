angular.module("EvalApp").factory("sessionInjector", function(sessionService){

	return{

		request: function(config){

			if(sessionService.getToken()){
				config.headers['Authorization'] = "Basic " + sessionService.getToken();
			}
			return config;
		}
	};
});

angular.module("EvalApp").config(['$httpProvider', function($httpProvider) {  
    console.log("HELLO");
    $httpProvider.interceptors.push('sessionInjector');
}]);