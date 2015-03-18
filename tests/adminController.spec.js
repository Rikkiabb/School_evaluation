describe("AdminController", function(){
	var controller;
	var $scope;
	var adminFactoryMock = {
		getTemplates: jasmine.createSpy('adminFactory.getTemplates')
	};

	
	beforeEach(module("EvalApp"));

	beforeEach(inject(function ($controller, $rootScope) {
		$scope = $rootScope.$new();
		controller = $controller("AdminController", {$scope: $scope});
	}));

	it("should define the template array and get all the templates", function(){
		
		expect($scope.templates).toBeDefined();
		
	});

	it("should call the new template function and initialize the modal instance", function(){
		$scope.newTemplate();
		expect($scope.modalInstance).toBeDefined();
		
	});

	it("should try to get a template by id and initialize the modal instance", function(){
		$scope.getTemplateById();
		expect($scope.modalInstance).toBeDefined();
		
	});


	
});