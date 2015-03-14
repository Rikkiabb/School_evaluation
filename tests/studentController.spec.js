describe("StudentController", function(){

	var $scope;
	var controller;
	var sessionServiceMock = {
		setToken: jasmine.createSpy('sessionService.setToken'),
		getToken: jasmine.createSpy('sessionService.getToken'),
		setCourses: jasmine.createSpy('sessionService.setCourses'),
		getCourses: jasmine.createSpy('sessionService.getCourses'),
		setEvaluations: jasmine.createSpy('sessionService.setEvaluations'),
		getEvaluations: jasmine.createSpy('sessionService.getEvaluations')
	};

	beforeEach(module("EvalApp"));

	beforeEach(inject(function ($controller, $rootScope) {
		$scope = $rootScope.$new();
		controller = $controller("StudentController", {$scope: $scope, sessionService: sessionServiceMock});
	}));

	it("should initialize myCourses and myEval to be undefined. Will be defined in the Session Service", function(){
		expect(sessionServiceMock.getCourses).toHaveBeenCalled();
		expect(sessionServiceMock.getEvaluations).toHaveBeenCalled();
		expect($scope.myCourses).toBe(undefined);
		expect($scope.myEval).toBe(undefined);
	});

});