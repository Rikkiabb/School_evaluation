describe("ResultController", function(){
	var $scope;
	var controller;

	var modalInstanceMock = {                    
	        dismiss: jasmine.createSpy('modalInstance.dismiss')
		};

	var adminFactoryMock = {
		getTeachers: jasmine.createSpy('adminFactory.getTeachers')
	};

	var RESULTmock = {
		ID: 9, 
		TemplateID: 20, 
		TemplateTitle: "Titill", 
		TemplateTitleEN: "Title", 
		Courses: []};

	beforeEach(module("EvalApp"));

	beforeEach(inject(function ($controller, $rootScope) {
		$scope = $rootScope.$new();
		controller = $controller("ResultController", {$scope: $scope, $modalInstance: modalInstanceMock, RESULT: RESULTmock, adminFactory: adminFactoryMock});
	}));

	it("should initialize scope variables", function(){
		expect($scope.result).toBeDefined();
		expect($scope.courses).toBeDefined();
		expect($scope.teachers).toBeDefined();
		expect($scope.teachName).toBeDefined();
		expect($scope.showLanguage).toEqual("isl");
		
	});

	it("should call close function in scope and dismiss the modal instance", function(){
		$scope.close();
		expect(modalInstanceMock.dismiss).toHaveBeenCalled();
	});

	it("should call getTeach and check if the admin factory is called", function(){
		$scope.getTeach(10, "20151");
		expect(adminFactoryMock.getTeachers).toHaveBeenCalledWith(10, "20151", jasmine.any(Function));
	});

	it("should call getTeachName with and ssn and return the correct name", function(){
		$scope.teachers.push({SSN: 1, FullName: "dabs"});
		var dabs = 'dabs';
		var expectedName = $scope.getTeachName(1);
		expect(expectedName).toEqual(dabs);
	});

	it("should change the language from icelandic to english", function(){
		$scope.changeLang("eng");

		expect($scope.showLanguage).toEqual("eng");

	}); 

});