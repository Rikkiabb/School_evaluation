describe("AdminController", function(){
	var controller;
	var $scope;
	var adminFactoryMock = {
		addTemplate: jasmine.createSpy('adminFactory.addTemplate'),
		getTemplates: jasmine.createSpy('adminFactory.getTemplates'),
		getTemplateById: jasmine.createSpy('adminFactory.getTemplateById'),
		createEvaluation: jasmine.createSpy('adminFactory.createEvaluation'),
		getEvaluations: jasmine.createSpy('adminFactory.getEvaluations'),
		getEvalResults: jasmine.createSpy('adminFactory.getEvalResults'),
		getTeachers: jasmine.createSpy('adminFactory.getTeachers')
	};

	var modallMock = {
		open: jasmine.createSpy('$modal.open')
	};

	
	beforeEach(module("EvalApp"));

	beforeEach(inject(function ($controller, $rootScope) {
		$scope = $rootScope.$new();
		controller = $controller("AdminController", {$scope: $scope, adminFactory: adminFactoryMock});
	}));

	it("should define the template array and get all the templates", function(){
		
		expect($scope.templates).toBeDefined();
		expect($scope.evaluations).toBeDefined();
		expect($scope.showStatus).toBe("closed");
		expect(adminFactoryMock.getTemplates).toHaveBeenCalled();
		expect(adminFactoryMock.getEvaluations).toHaveBeenCalled();

		
	});

	it("should call changeTab and set showSatus", function(){
		var status = "open";
		$scope.changeTab(status);
		expect($scope.showStatus).toBe(status);
		
	});

	it("should call getResults and call getEvalResults and modal open", function(){
		
		$scope.getResults(18);
		expect(adminFactoryMock.getEvalResults).toHaveBeenCalledWith(18, jasmine.any(Function));
		
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