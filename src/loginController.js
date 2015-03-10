angular.module("EvalApp").controller("LoginController", function($scope, $location, loginFactory, $http, SERVER, sessionService){
	$scope.login = function($event){
		if($event !== undefined){
			if($event.keyCode !== 13){
				return;
			}
		}
		if($scope.username === ''){
			console.log("ERORR");
			return;
		}
		if($scope.password === ''){
			console.log("ERORR");
			return;
		}
			
		loginFactory.login($scope.username, $scope.password, function(){
			console.log(sessionService.getToken());
		});
		
	};

	$scope.test = function (){

		$http.get(SERVER + "evaluations")
		.success(function(data){
			console.log(data);
		})
		.error(function(data, status){
			
			console.log(status);
		});

	};

});