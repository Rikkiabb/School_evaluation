describe("StudentController", function(){

	var $scope;
	var controller;
	var studentFactoryMock = {
		courses: jasmine.createSpy('studentFactory.courses'),
		evaluations: jasmine.createSpy('studentFactory.evaluations'),
		getTemplateById: jasmine.createSpy('studentFactory.getTemplateById'),
		getEvaluationById: jasmine.createSpy('studentFactory.getEvaluationById'),
		getTeachers: jasmine.createSpy('studentFactory.getTeachers')

	};

	var modalMock = {                    
	    open: jasmine.createSpy('$modal.open')
	};

	beforeEach(module("EvalApp"));

	beforeEach(inject(function ($controller, $rootScope) {
		$scope = $rootScope.$new();
		controller = $controller("StudentController", {$scope: $scope, studentFactory: studentFactoryMock, $modal: modalMock});
	}));

	it("should initialize myCourses and myEval. Should make calls to the studenFactory.courses with myCourses and to studentFactory.evaluations with myEval", 
		function(){
		expect($scope.myCourses).toBeDefined();
		expect($scope.myEval).toBeDefined();
		expect(studentFactoryMock.courses).toHaveBeenCalledWith(jasmine.any(Function));
		expect(studentFactoryMock.evaluations).toHaveBeenCalledWith(jasmine.any(Function));
	});

	it("should call getEvalByID and check if factory is called correctly", function(){
		$scope.getEvalByID(1, "T-427-WEPO", "20151");
		expect(studentFactoryMock.getEvaluationById).toHaveBeenCalledWith(1, jasmine.any(Function));
	});

	it("should call getTemplateById and check if factory is called correctly", function(){
		$scope.getTemplateById(17, "T-427-WEPO", "20151", {ID: 17, TemplateID: 26, TemplateTitle: "WOT M8?", TemplateTitleEN: "WOT M8?", Courses: [{}]});
		expect(studentFactoryMock.getTemplateById).toHaveBeenCalledWith(26, jasmine.any(Function));
	});

	it("should call getTeachers and check if factory is called correctly", function(){
		$scope.getTeachers(17, "T-427-WEPO", "20151", {ID: 26, Title: "WOT M8?", TitleEN: "WOT M8?", IntroText: "inngangur", IntroTextEN: "intro", CourseQuestions: [{}], TeacherQuestions: [{}]});
		expect(studentFactoryMock.getTeachers).toHaveBeenCalledWith("T-427-WEPO", "20151", jasmine.any(Function));
	});

	it("should call makeTemplate and check if modal is called", function(){
		$scope.makeTemplate(17, "T-427-WEPO", "20151", {ID: 26, Title: "WOT M8?", TitleEN: "WOT M8?", IntroText: "inngangur", IntroTextEN: "intro", CourseQuestions: [{}], TeacherQuestions: [{}]}, [{}]);
		expect(modalMock.open).toHaveBeenCalled();
	});

});