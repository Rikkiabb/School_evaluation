describe("SessionService", function(){

	var factory;

	beforeEach(module("EvalApp"));

	beforeEach(function () {
		inject(function($injector){
			factory = $injector.get('sessionService');
		})

	});

	it("should call the setToken() function with myToken as input and return myToken from getToken()", function(){

		factory.setToken("myToken");
		expect(factory.getToken()).toBe("myToken");
	});

	it("should call the setCourses() function with VEF as input and return VEF from getCourses()", function(){

		factory.setCourses("VEF");
		expect(factory.getCourses()).toBe("VEF");

	});

	it("should call the setEvaluations() function with myEval as input and return myEval from getEvaluations()", function(){

		factory.setEvaluations("myEval");
		expect(factory.getEvaluations()).toBe("myEval");

	});

	it("should call the setUser() function with stefanh13 as input and return stefanh13 from getUser()", function(){

		factory.setUser("stefanh13");
		expect(factory.getUser()).toBe("stefanh13");

	});
});

