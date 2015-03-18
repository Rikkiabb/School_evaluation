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
		
		var mockTemp = {
			CourseQuestions: [{Answers: [{ID: 19, ImageURL: "sample string 4", Text: "sample string 2", TextEN: "sample string 3", Weight: 5}, {ID: 20, ImageURL: "sample string 4", Text: "sample string 2", TextEN: "sample string 3", Weight: 5}], ID: 50, ImageURL: "sample string 4", Text: "sample string 2", TextEN: "sample string 3", Type: "text"}, {Answers: [{ID: 21, ImageURL: "sample string 4", Text: "sample string 2", TextEN: "sample string 3", Weight: 5}, {ID: 22, ImageURL: "sample string 4", Text: "sample string 2", TextEN: "sample string 3", Weight: 5}], ID: 51, ImageURL: "sample string 4", Text: "sample string 2", TextEN: "sample string 3", Type: "text"}],
			ID: 18,
			IntroText: "sample string 4",
			IntroTextEN: "sample string 5",
			TeacherQuestions: [{Answers: [{ID: 23, ImageURL: "sample string 4", Text: "sample string 2", TextEN: "sample string 3", Weight: 5}, {ID: 24, ImageURL: "sample string 4", Text: "sample string 2", TextEN: "sample string 3", Weight: 5}], ID: 52, ImageURL: "sample string 4", Text: "sample string 2", TextEN: "sample string 3", Type: "text"}, {Answers: [{ID: 25, ImageURL: "sample string 4", Text: "sample string 2", TextEN: "sample string 3", Weight: 5}, {ID: 26, ImageURL: "sample string 4", Text: "sample string 2", TextEN: "sample string 3", Weight: 5}], ID: 53, ImageURL: "sample string 4", Text: "sample string 2", TextEN: "sample string 3", Type: "text"}],
			Title: "sample string 2",
			TitleEN: "sample string 3"

		}

		// expect($scope.template).toBe(mockTemp);
		// expect($scope.CourseQuestions).toBeDefined();


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