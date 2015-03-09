describe("HomeCtrl", function(){
	var controller;
	var scope;
	var mock = {test: function(arg){
			
		}
	};
	beforeEach(module("EvalApp"));

	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		spyOn(mock, "test");
		controller = $controller("HomeController",{$scope: scope, testRescource: mock});
	}));

	it("should initialize hello world object", function(){
		// controller.scope.func();
		expect(scope.helloWorld).toBeDefined();
		// var a = {
		// 	foo: "foo"
		// };

		// expect(a.foo).toBeDefined();
	});
});