// describe("HomeCtrl", function(){
// 	var controller;
// 	var $scope;
// 	var mock = {test: function(arg){
			
// 		}
// 	};
// 	beforeEach(module("EvalApp"));

// 	beforeEach(inject(function ($controller, $rootScope) {
// 		$scope = $rootScope.$new();
// 		spyOn(mock, "test");
// 		controller = $controller("HomeController", { $scope: $scope, testRescource: mock });
// 	}));

// 	it("should initialize hello world object", function(){
// 		$scope.firstFunc();
// 		expect($scope.helloWorld).toBeDefined();
		
// 	});

// 	it("should call the test function in the factory", function(){
		
// 		var user = "Knoll";

// 		$scope.user = user;


// 		$scope.secondFunc();

// 		expect(mock.test).toHaveBeenCalledWith(user);
		
		
// 	});
// });