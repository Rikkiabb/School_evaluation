describe("ModalInstanceController", function(){
	var controller;
	var $scope;
	var modalInstanceMock = {                    
	        close: jasmine.createSpy('modalInstance.close'),
	        dismiss: jasmine.createSpy('modalInstance.dismiss'),
	        result: {
	        	then: jasmine.createSpy('modalInstance.result.then')
	        }
		};

	var toasterMock = {                    
	        pop: jasmine.createSpy('toaster.pop')
		};
	
	beforeEach(module("EvalApp"));

	beforeEach(inject(function ($controller, $rootScope) {
		$scope = $rootScope.$new();
		controller = $controller("ModalInstanceController", {$scope: $scope, $modalInstance: modalInstanceMock, toaster: toasterMock});
	}));

	it("should initialize call the open function and initialize the modal instance", function(){
		expect($scope.showText).toBe(true);
		expect($scope.showMultiple).toBe(false);
		expect($scope.multipleType).toBe(undefined);
		expect($scope.questionType).toBe(undefined);
		expect($scope.courseQuestions).toBeDefined();
		expect($scope.answersIS).toBeDefined();
		expect($scope.answersENG).toBeDefined();

	});

	it("should call change with type text and show variables should have right values", function(){
		
		$scope.change("text");

		expect($scope.showText).toBe(true);
		expect($scope.showMultiple).toBe(false);

	});

	it("should call change with type multiple and show variables should have right values", function(){
		
		$scope.change("multiple");

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

	it("should call the ok function and the dismiss function of the modalInstance", function(){
		
		$scope.cancel();
		expect(modalInstanceMock.dismiss).toHaveBeenCalledWith("cancel");

	});

	
});