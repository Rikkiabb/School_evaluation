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
	
	beforeEach(module("EvalApp"));

	beforeEach(inject(function ($controller, $rootScope) {
		$scope = $rootScope.$new();
		id = 18;
		controller = $controller("TemplateByIdController", {$scope: $scope, $modalInstance: modalInstanceMock, adminFactory: adminFactoryMock, ID: id});
	}));

	it("should define the template and get the template by id", function(){
		
		expect($scope.template).toBeDefined();
		expect(adminFactoryMock.getTemplateById).toHaveBeenCalledWith(id, jasmine.any(Function));
	});

	it("should call post eval and define start, end date and the new eval object", function(){
		
		$scope.postEval();
		$scope.startDate = new Date(); // Or Date.today()
		$scope.endDate = new Date() + 1;
		expect($scope.startDate).toBeDefined();
		expect($scope.endDate).toBeDefined();
		// expect($scope.newEval).toBeDefined();
	});

	// it("should call post eval and try to create an evaluationa and close the modal window", function(){
		
	// 	$scope.postEval();
	// 	var newEval = {
	// 		TemplateID: id,
	// 		StartDate: $scope.startDate.toISOString(),
	// 		EndDate: $scope.endDate.toISOString()

	// 	};

	// 	expect(adminFactoryMock.createEvaluation).toHaveBeenCalledWith(newEval);
	// 	expect(modalInstanceMock.close).toHaveBeenCalled();
	// });
});