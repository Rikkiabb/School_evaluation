describe("templateByIdController", function(){
	var controller;
	var $scope;
	var id;
	var adminFactoryMock = {
		
		getTemplateById: jasmine.createSpy('adminFactory.getTemplateById'),
		createEvaluation: jasmine.createSpy('adminFactory.createEvaluation')
	};

	var modalInstanceMock = {                    
	        close: jasmine.createSpy('modalInstance.close')

	};

	var toasterMock = {
		pop: jasmine.createSpy('toaster.pop')
	}
	
	beforeEach(module("EvalApp"));

	beforeEach(inject(function ($controller, $rootScope) {
		$scope = $rootScope.$new();
		id = 18;
		controller = $controller("TemplateByIdController", {$scope: $scope, $modalInstance: modalInstanceMock, adminFactory: adminFactoryMock, ID: id, toaster: toasterMock});
	}));

	it("should define the template all variables at top", function(){
		
		expect($scope.template).toBeDefined();
		expect($scope.startDate).toBeDefined();
		expect($scope.endDate).toBeDefined();
	});

	it("should get a template by id ID", function(){
		
		expect(adminFactoryMock.getTemplateById).toHaveBeenCalledWith(id, jasmine.any(Function));
	});


	it("should call post eval with start and end date the same and not define variables", function(){
		
		$scope.startDate = new Date();
		$scope.endDate = $scope.startDate;
		$scope.postEval();
		expect($scope.newEval).not.toBeDefined();
		expect(adminFactoryMock.createEvaluation).not.toHaveBeenCalled();
		expect(toasterMock.pop).toHaveBeenCalled();
	});

	it("should call post eval with start smaller than end date and not define variables", function(){
		
		$scope.startDate = new Date();
		$scope.endDate = $scope.startDate;
		$scope.startDate.setDate($scope.endDate.getDate() - 1);
		$scope.postEval();
		expect($scope.newEval).not.toBeDefined();
		expect(adminFactoryMock.createEvaluation).not.toHaveBeenCalled();
		expect(toasterMock.pop).toHaveBeenCalled();
	});

	it("should call post eval and define start, end date and the new eval object", function(){
		
		$scope.startDate = new Date();
		$scope.endDate = new Date();
		$scope.endDate.setDate($scope.endDate.getDate() + 1);
		$scope.postEval();
		expect($scope.newEval).toBeDefined();
		expect(adminFactoryMock.createEvaluation).toHaveBeenCalled();
	});

});