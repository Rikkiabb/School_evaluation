describe("AdminController", function(){
	var controller;
	var $scope;
	var adminFactoryMock = {
		
		getTemplates: jasmine.createSpy('adminFactory.getTemplates')
	};
	
	beforeEach(module("EvalApp"));

	beforeEach(inject(function ($controller, $rootScope) {
		$scope = $rootScope.$new();
		controller = $controller("AdminController", {$scope: $scope, adminFactory: adminFactoryMock});
	}));

	it("should define the template array and get all the templates", function(){
		
		expect($scope.templates).toBeDefined();
		expect(adminFactoryMock.getTemplates).toHaveBeenCalled();
		
	});

	it("should call the open function and initialize the modal instance", function(){
		$scope.newTemplate();
		expect($scope.modalInstance).toBeDefined();
		
	});



	
});