describe("TemplateController", function(){
	var controller;
	var $scope;
	var modalInstanceMock = {                    
	        close: jasmine.createSpy('modalInstance.close'),
	        dismiss: jasmine.createSpy('modalInstance.dismiss')

		};

	var toasterMock = {                    
	        pop: jasmine.createSpy('toaster.pop')
		};

	var admFactoryMock = {
			addTemplate: jasmine.createSpy('adminFactory.addTemplate')
	};
	
	beforeEach(module("EvalApp"));

	beforeEach(inject(function ($controller, $rootScope) {
		$scope = $rootScope.$new();
		controller = $controller("TemplateController", {$scope: $scope, $modalInstance: modalInstanceMock, toaster: toasterMock, adminFactory: admFactoryMock});
	}));

	it("should initialize call the open function and initialize the modal instance", function(){
		expect($scope.showText).toBe(true);
		expect($scope.showMultiple).toBe(false);
		expect($scope.multipleType).toBe(undefined);
		expect($scope.questionType).toBe(undefined);
		expect($scope.titleIS).toBe("");
		expect($scope.titleENG).toBe("");
		expect($scope.introIS).toBe("");
		expect($scope.introENG).toBe("");
		expect($scope.courseQuestions).toBeDefined();
		expect($scope.answersIS).toBeDefined();
		expect($scope.answersENG).toBeDefined();

	});

	it("should call change with type text and show variables should have right values", function(){
		
		$scope.changeTab("text");

		expect($scope.showText).toBe(true);
		expect($scope.showMultiple).toBe(false);

	});

	it("should call change with type multiple and show variables should have right values", function(){
		
		$scope.changeTab("multiple");

		expect($scope.showText).toBe(false);
		expect($scope.showMultiple).toBe(true);

	});

	it("should call addQuestion with showText true and check if the question object is initialized correctly", function(){
		
		$scope.showText = true;
		$scope.textQuestionIS = "Spurning";
		$scope.textQuestionENG = "Question";
		$scope.questionType = "course";
		$scope.addQuestion();
		expect($scope.questObj.ID).toBe(0);
		expect($scope.questObj.Text).toBe("Spurning");
		expect($scope.questObj.TextEN).toBe("Question");
		expect($scope.questObj.ImageUrl).toBe("");
		expect($scope.questObj.type).toBe("text");
		

	});

	it("should call addQuestion with showText true and check if the question has been pushed to the course array", function(){
		
		$scope.showText = true;
		$scope.questionType = "course";
		$scope.addQuestion();
		expect($scope.courseQuestions.length).toBe(1);

	});

	it("should call addQuestion with showText true and check if the question has been pushed to the teacher array", function(){
		
		$scope.showText = true;
		$scope.questionType = "teacher";
		$scope.addQuestion();
		expect($scope.teacherQuestions.length).toBe(1);

	});

	it("should call addQuestion with showText true and input string have been cleared", function(){
		
		$scope.showText = true;
		$scope.textQuestionIS = "Spurning";
		$scope.textQuestionENG = "Question";
		$scope.addQuestion();
		expect($scope.textQuestionIS).toBe("");
		expect($scope.textQuestionENG).toBe("");

	});

	it("should call addQuestion with showMultiple true and have multipleType undefined", function(){
		
		$scope.showText = false;
		$scope.showMultiple = true;

		$scope.answersIS = [{text: "svar1"}];
		$scope.answersENG = [{text: "answer1"}];
		$scope.addQuestion();
		expect($scope.answers).not.toBeDefined();
		expect($scope.questObj).not.toBeDefined();
		expect(toasterMock.pop).toHaveBeenCalled();

	});

	it("should call addQuestion with showMultiple true and have multipleType undefined and not reset input fields", function(){
		
		$scope.showText = false;
		$scope.showMultiple = true;
		$scope.textQuestionIS = "Spurning";
		$scope.textQuestionENG = "Question";
		$scope.answersIS = [{text: "svar1"}];
		$scope.answersENG = [{text: "answer1"}];
		$scope.addQuestion();
		expect($scope.textQuestionIS).toBe("Spurning");
		expect($scope.textQuestionENG).toBe("Question");
		expect($scope.answersIS[0].text).toBe("svar1");
		expect($scope.answersENG[0].text).toBe("answer1");
		

	});

	it("should call addQuestion with showMultiple true and have right objects and arrays initialized", function(){
		
		$scope.showText = false;
		$scope.showMultiple = true;
		$scope.multipleType = 'single';
		$scope.answersIS = [{text: "svar1"}, {text: "svar2"}];
		$scope.answersENG = [{text: "answer1"}];
		$scope.addQuestion();
		expect($scope.answers).toBeDefined();
		expect($scope.questObj).not.toBeDefined();
		expect(toasterMock.pop).toHaveBeenCalled();

	});

	it("should call addQuestion with showMultiple true and and insert one answer to the answers array", function(){
		
		$scope.showText = false;
		$scope.showMultiple = true;
		$scope.multipleType = 'single';
		$scope.answersIS = [{text: "svar1"}];
		$scope.answersENG = [{text: "answer1"}];
		$scope.addQuestion();
		var arr = $scope.answers;
		expect(arr.length).toBe(1);
		expect(arr[0].ID).toBe(0);
		expect(arr[0].Text).toBe("svar1");
		expect(arr[0].TextEN).toBe("answer1");
		expect(arr[0].ImageUrl).toBe("");
		expect(arr[0].Weight).toBe(1);


	});

	it("should call addQuestion with showMultiple true and initialize the questObj correctly", function(){
		
		$scope.showText = false;
		$scope.showMultiple = true;
		$scope.answersIS = [{text: "svar1"}];
		$scope.answersENG = [{text: "answer1"}];
		$scope.multipleQuestionIS = "Spurning";
		$scope.multipleQuestionENG = "Question";
		$scope.multipleType = "single";
		$scope.questionType = "course";
		$scope.addQuestion();
		var obj = $scope.questObj;
		expect(obj.ID).toBe(0);
		expect(obj.Text).toBe("Spurning");
		expect(obj.TextEN).toBe("Question");
		expect(obj.ImageUrl).toBe("");
		expect(obj.type).toBe("single");
		expect($scope.courseQuestions.length).toBe(1);

	});

	it("should call addQuestion with showMultiple true and empty all input variables", function(){
		
		$scope.showText = false;
		$scope.showMultiple = true;
		$scope.multipleType = "single";
		$scope.answersIS = [{text: "svar1"}];
		$scope.answersENG = [{text: "answer1"}];
		$scope.multipleQuestionIS = "Spurning";
		$scope.multipleQuestionENG = "Question";
		$scope.addQuestion();
		expect($scope.multipleQuestionIS).toBe("");
		expect($scope.multipleQuestionENG).toBe("");
		expect($scope.answersIS.length).toBe(0);
		expect($scope.answersENG.length).toBe(0);


	});

	it("should call the ok function and the close function of the modalInstance", function(){
		
		$scope.ok();
		expect(modalInstanceMock.close).toHaveBeenCalled();

	});

	it("should call the ok function and initialize the template obj", function(){
		

		$scope.ok();
		expect($scope.templateObj).toBeDefined();

	});

	it("should call the ok function and initialize the template obj with right values", function(){
		
		$scope.showText = true;
		
		//Set up the template information.
		$scope.titleIS = "Titill";
		$scope.titleENG = "Title";
		$scope.introIS = "Inngangur";
		$scope.introENG = "Intro";

		//Add to the course array
		$scope.questionType = "course";
		$scope.textQuestionIS = "Spurning course";
		$scope.textQuestionIS = "Question course";
		$scope.addQuestion();

		//Add to the teacher array
		$scope.questionType = "teacher";
		$scope.textQuestionIS = "Spurning teacher";
		$scope.textQuestionIS = "Question teacher";
		$scope.addQuestion();


		$scope.ok();

		var obj = $scope.templateObj;
		expect(obj.Title).toBe("Titill");
		expect(obj.TitleEN).toBe("Title");
		expect(obj.IntroText).toBe("Inngangur");
		expect(obj.IntroTextEN).toBe("Intro");
		expect(obj.CourseQuestions.length).toBe(1);
		expect(obj.TeacherQuestions.length).toBe(1);


	});

	it("should call the ok function and try to add the template", function(){

		$scope.showText = true;
		
		//Set up the template information.
		$scope.titleIS = "Titill";
		$scope.titleENG = "Title";
		$scope.introIS = "Inngangur";
		$scope.introENG = "Intro";

		//Add to the course array
		$scope.questionType = "course";
		$scope.textQuestionIS = "Spurning course";
		$scope.textQuestionIS = "Question course";
		$scope.addQuestion();

		//Add to the teacher array
		$scope.questionType = "teacher";
		$scope.textQuestionIS = "Spurning teacher";
		$scope.textQuestionIS = "Question teacher";
		$scope.addQuestion();

		var obj = {
			Title: "Titill",
			TitleEN: "Title",
			IntroText: "Inngangur",
			IntroTextEN: "Intro",
			CourseQuestions: $scope.courseQuestions,
			TeacherQuestions: $scope.teacherQuestions
		}

		$scope.ok();
		expect(admFactoryMock.addTemplate).toHaveBeenCalledWith(obj);

	});

	it("should call the cancel function and the dismiss function of the modalInstance", function(){
		
		$scope.cancel();
		expect(modalInstanceMock.dismiss).toHaveBeenCalledWith("cancel");

	});


	
	
});