describe("LoginController", function(){

	var $scope;
	var controller;
	var compile;

	var loginFactoryMock = {
		login: jasmine.createSpy('loginFactory.login')
	}

	var toasterMock = {                    
	        pop: jasmine.createSpy('toaster.pop')
		};

	beforeEach(module("EvalApp"));

	beforeEach(inject(function ($controller, $rootScope) {
		$scope = $rootScope.$new();
		controller = $controller("LoginController", {
			$scope: $scope,
			loginFactory: loginFactoryMock,
			toaster: toasterMock
		});

	}));

	it("should call loginFactory.login() when login() is called", function(){

		$scope.username = 'Stefanh13';
		$scope.password = 12345;
		$scope.login();
		expect(loginFactoryMock.login).toHaveBeenCalled();
	});

	it("should have username and password set as undefined", function(){
	
		expect($scope.username).toBe(undefined);
		expect($scope.password).toBe(undefined);
	});


});


















