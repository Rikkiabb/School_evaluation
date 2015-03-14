describe("studentFactory", function(){

	var factory, httpBackend;

	var studentFactoryMock = {
		courses: jasmine.createSpy('studentFactory.courses'),
		evaluations: jasmine.createSpy('studentFactory.evaluations')
	};

	var sessionServiceMock = {
		setToken: jasmine.createSpy('sessionService.setToken'),
		getToken: jasmine.createSpy('sessionService.getToken'),
		setCourses: jasmine.createSpy('sessionService.setCourses'),
		getCourses: jasmine.createSpy('sessionService.getCourses'),
		setEvaluations: jasmine.createSpy('sessionService.setEvaluations'),
		getEvaluations: jasmine.createSpy('sessionService.getEvaluations')
	};
	var sessionInjectorMock = {
		request: jasmine.createSpy('sessionInjector.request')
	};

	beforeEach(module("EvalApp"));

//config.headers['Authorization'] = "Basic " + sessionService.getToken();

	beforeEach(function () {
		inject(function (_studentFactory_, $httpBackend){
			factory = _studentFactory_;   
      		httpBackend = $httpBackend;
		})
	});

	afterEach(function () {
		httpBackend.verifyNoOutstandingExpectation();
		httpBackend.verifyNoOutstandingRequest();
	});

	it("should", function(){
		expect(angular.isFunction(factory.courses)).toBe(true);
	});


	// http://www.benlesh.com/2013/06/angular-js-unit-testing-services.html

	// it("should", function(){
	// 	// var returnData = { excited: true };

	// 	// var url = "http://dispatch.ru.is/h15/api/v1/my/courses"
	// 	// httpBackend.expectGET(url).respond(returnData);

	// 	// var returnedPromise = factory.courses;
	// 	// //console.log(returnedPromise, "keke");
	// 	// var resault;

	// 	// returnedPromise.then(function (response){
	// 	// 	resault = response;
	// 	// });

	// 	// httpBackend.flush();
	// });

		// it('Login should succeed',
		// 	inject( function( studentFactory, $httpBackend ){
		// 		var returnData = { excited: true };

		// 		var url = "http://dispatch.ru.is/h15/api/v1/my/courses"
		// 		// Arrange:
		// 		$httpBackend.expect(url)
		// 			.respond(200, returnData);
		// 		// Act:
		// 		studentFactory.courses
		// 			.success(function(data) {
		// 				expect(data.excited).toBeTruthy();
		// 			});
		// 		$httpBackend.flush(); // This will trigger .then()!
		// }));
});



