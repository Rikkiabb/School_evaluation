describe("AdminController", function(){
	var controller;
	var $scope;
	
	beforeEach(module("EvalApp"));

	beforeEach(inject(function ($controller, $rootScope) {
		$scope = $rootScope.$new();
		controller = $controller("AdminController", {$scope: $scope});
	}));

	it("should initialize call the open function and initialize the modal instance", function(){
		$scope.open();
		expect($scope.modalInstance).toBeDefined();
		
	});

	
});