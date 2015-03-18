describe("evaluationController", function(){
	var controller;
	var $scope;
	var modalInstanceMock = {                    
	    close: jasmine.createSpy('modalInstance.close'),
        dismiss: jasmine.createSpy('modalInstance.dismiss')
	};
	var toasterMock = {                    
	        pop: jasmine.createSpy('toaster.pop')
	};
	var studentFactoryMock = {
		courses: jasmine.createSpy('studentFactory.courses'),
		evaluations: jasmine.createSpy('studentFactory.evaluations'),
		getTemplateById: jasmine.createSpy('studentFactory.getTemplateById'),
		getEvaluationById: jasmine.createSpy('studentFactory.getEvaluationById'),
		getTeachers: jasmine.createSpy('studentFactory.getTeachers')
	};
	var TEMPLATEmock = {
		template: {CourseQuestions: [{ ID: 100, answers: ["WEPO"], question: {Type: "---", ID: 1000, Text: "Hvað heitir námskeiðið?"}}], TeacherQuestions: [{ ID: 200, question: {Type: "---", ID: 2000, Text: "Hvað heitir kennarinn?"}, answers: ["Dabs"]}]},
		teachers: [{Fullname:"Dabs", SSN: "2410872989"}],
		course: "c",
		semester: "s",
		evalID: 1
	}; 
	var evaluationFactoryMock = {
		addEvalQuestion: jasmine.createSpy('evaluationFactory.addEvalQuestion')
	};

	beforeEach(module("EvalApp"));

	beforeEach(inject(function ($controller, $rootScope) {
		$scope = $rootScope.$new();
		controller = $controller("EvaluationController", {
			$scope: $scope,
			$modalInstance: modalInstanceMock,
			toaster: toasterMock,
			studentFactory: studentFactoryMock,
			TEMPLATE: TEMPLATEmock,
			evaluationFactory: evaluationFactoryMock
		});
	}));

	// $scope.questionCount = TEMPLATE.template.TeacherQuestions.length;
	// $scope.template = TEMPLATE.template;
	// $scope.teachers = TEMPLATE.teachers;

	it("should initialize variables that are not inside a function", function(){

		expect($scope.courseQ).toBeDefined();
		expect($scope.teacherQ).toBeDefined();
		expect($scope.qObjects).toBeDefined();
		expect($scope.questionCount).toBeDefined();
		expect($scope.template).toBeDefined();
		expect($scope.teachers).toBeDefined();
		expect($scope.array).toBeDefined();
		expect($scope.tArr).toBeDefined();
		expect($scope.courseQ).toBeDefined();
		expect($scope.qObjects).toBeDefined();
	});

	it("should push one course question object onto the courseQ array", function(){

		expect($scope.courseQ[0].ID).toBe(100);
		expect($scope.courseQ.length).toBe(1);
	});

	it("should push one teacher question object onto the teacherQ array", function(){

		expect($scope.teacherQ[0].ID).toBe("0_200");
		expect($scope.teacherQ.length).toBe(1);
	});

// $scope.courseQ[i].question.Type 
	// it("----", function(){
	// 	$scope.courseQ[0].question.Type = "text";
	// 	$scope.save();
	// 	expect(true).toBe(true); $scope.val = $scope.courseQ[i].answers[0];
	// });
	it("should call save() with Type = 'text' and push a answered course question object to the qObjects array with the right values. Value is undefined because the input field is empty", function(){
		$scope.courseQ[0].question.Type = "text";
		$scope.courseQ[0].answers[0] = "siggi";
		$scope.save();
		expect($scope.cVal).toBe("siggi");

		expect($scope.qObjects[0].QuestionID).toBe(100);
		expect($scope.qObjects[0].TeacherSSN).toBe("");
		expect($scope.qObjects[0].Value).toBe("siggi");
	});

	it("should call save() with Type = 'single' and push a answered course question object to the qObjects array with the right values", function(){
		$scope.courseQ[0].question.Type = "single";
		$scope.courseQ[0].answers[0] = "1";
		$scope.save();
		expect($scope.cVal).toEqual(["1"]);

		expect($scope.qObjects[0].QuestionID).toBe(100);
		expect($scope.qObjects[0].TeacherSSN).toBe("");
		expect($scope.qObjects[0].Value).toEqual(["1"]);
	});

	// it("should call save() with Type = 'miltiple' and not push a answered course question object to the qObjects array because the input field is empty and therefore will not execute the loop", function(){
	// 	$scope.courseQ[0].question.Type = "multiple";
	// 	$scope.save();

	// 	expect($scope.qObjects).toEqual([])
	// });

	it("should call save() with Type = 'multiple' and push a answered course question object to the qObjects array with the right values", function(){
		$scope.courseQ[0].question.Type = "multiple";
		$scope.courseQ[0].answers[0] = "2";
		$scope.save();

		expect($scope.cVal).toEqual("2");
		expect($scope.qObjects[0].QuestionID).toBe(100);
		expect($scope.qObjects[0].TeacherSSN).toBe("");
		expect($scope.qObjects[0].Value).toEqual("2");
	});


	it("should call save() with Type = 'text' and push a answered teacher question object to the qObjects array with the right values", function(){
		$scope.teacherQ[0].question.Type = "text";
		$scope.teacherQ[0].answers[0] = "siggi";
		$scope.save();

		expect($scope.tVal).toEqual("siggi");
		expect($scope.qObjects[0].QuestionID).toBe(200);
		expect($scope.qObjects[0].TeacherSSN).toBe("2410872989");
		expect($scope.qObjects[0].Value).toEqual("siggi");
	});

	it("should call save() with Type = 'single' and push a answered teacher question object to the qObjects array with the right values", function(){
		$scope.teacherQ[0].question.Type = "single";
		$scope.teacherQ[0].answers[0] = "1";
		$scope.save();

		expect($scope.tVal).toEqual(["1"]);
		expect($scope.qObjects[0].QuestionID).toBe(200);
		expect($scope.qObjects[0].TeacherSSN).toBe("2410872989");
		expect($scope.qObjects[0].Value).toEqual(["1"]);
	});

	it("should call save() with Type = 'multiple' and push a answered teacher question object to the qObjects array with the right values", function(){
		$scope.teacherQ[0].question.Type = "multiple";
		$scope.teacherQ[0].answers[0] = "2";
		$scope.save();

		expect($scope.tVal).toEqual("2");
		expect($scope.qObjects[0].QuestionID).toBe(200);
		expect($scope.qObjects[0].TeacherSSN).toBe("2410872989");
		expect($scope.qObjects[0].Value).toEqual("2");
	});

	it("should call save() with Type = 'multiple' and push two answered teacher question objects to the qObjects array with the right values", function(){
		$scope.teacherQ[0].question.Type = "multiple";
		$scope.teacherQ[0].answers[0] = "2";
		$scope.teacherQ[0].answers[1] = "3";
		$scope.save();

		// expect($scope.tVal).toEqual("2");
		expect($scope.qObjects[0].QuestionID).toBe(200);
		expect($scope.qObjects[0].TeacherSSN).toBe("2410872989");
		expect($scope.qObjects[0].Value).toEqual("2");
		//console.log("+++++++++++", $scope.teacherQ[0].answers.length);
		expect($scope.qObjects[1].QuestionID).toBe(200);
		expect($scope.qObjects[1].TeacherSSN).toBe("2410872989");
		expect($scope.qObjects[1].Value).toEqual("3");
		// expect($scope.qObjects[0].TeacherSSN).toBe("2410872989");
		// expect($scope.qObjects[0].Value).toEqual("2");
	});
});




