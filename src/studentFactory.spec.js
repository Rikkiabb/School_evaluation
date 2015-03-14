describe("studentFactory", function(){

	var factory;

	beforeEach(module("EvalApp"));

	beforeEach(function () {
		inject(function($injector){
			factory = $injector.get('studentFactory');
		})

	});

	it("---", function(){

		factory.courses();
		//expect(factory.courses()).toBe("myToken");
	});

});

