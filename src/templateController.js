angular.module('EvalApp').controller('TemplateController', ["$scope", "$modalInstance", "toaster", "adminFactory",
function ($scope, $modalInstance, toaster, adminFactory) {

	$scope.showText = true;
	$scope.showTabs = false;
	$scope.showMultiple = false;
	$scope.multipleType = undefined;
	$scope.questionType = undefined;
	$scope.titleIS = "";
	$scope.titleENG = "";
	$scope.introIS = "";
	$scope.introENG = "";
	$scope.courseQuestions = [];
	$scope.teacherQuestions = [];
	$scope.answersIS = [];
	$scope.answersENG = [];

	//Change the view of text and multiple tabs.
	$scope.changeTab = function(type){

		if(type === "text"){
			$scope.showText = true;
			$scope.showMultiple = false;
		}
		else if(type === "multiple"){
			$scope.showText = false;
			$scope.showMultiple = true;
		}
	};

	//Changes the view from the info input to quesiton adding.
	$scope.changeShow = function () {

		$scope.showTabs = !$scope.showTabs;
		
	}

	$scope.addQuestion = function(){
		
		//For quesiton ID.
		if($scope.questionType === "teacher"){
			var id = $scope.teacherQuestions.length;
		}
		else if($scope.questionType === "course"){
			var id = $scope.courseQuestions.length;
		}
		if($scope.showText){

			 $scope.questObj = {
				ID: id,
				Text: $scope.textQuestionIS,
				TextEN: $scope.textQuestionENG,
				ImageUrl: "",
				Type: "text"
			};

			//Reset input fields.
			$scope.textQuestionIS = "";
			$scope.textQuestionENG = "";
		}
		else if($scope.showMultiple){

			$scope.answers = [];
			
			//Answers have to be equal.
			if($scope.answersIS.length === $scope.answersENG.length){
				
				//But cannot be empty.
				if($scope.answersIS.length === 0){
					toaster.pop('error', 'Error!', 'All input fields must be filled out.');
					return;
				}

				//Build the answer objects.
				for(var i = 0; i < $scope.answersIS.length; i++){
					var answerObj = {
						ID: i,
						Text: $scope.answersIS[i].text,
						TextEN: $scope.answersENG[i].text,
						ImageUrl: "",
						Weight: i + 1
					}

					$scope.answers.push(answerObj);
				}

				//Create the question object.
				$scope.questObj = {
					ID: id,
					Text: $scope.multipleQuestionIS,
					TextEN: $scope.multipleQuestionENG,
					ImageUrl: "",
					Type: $scope.multipleType,
					Answers: $scope.answers
				};
				
				//Empty all inputs.
				$scope.answersIS = [];
				$scope.answersENG = [];
				$scope.multipleQuestionIS = "";
				$scope.multipleQuestionENG = "";
			}
			else{
				toaster.pop('error', 'Error!', 'Please have the same amount of English and Icelandic answers.');
				return;
			}

			
		}

		//Add question object by type of question.
		if($scope.questionType === "teacher"){
			$scope.teacherQuestions.push($scope.questObj);
		}
		else if($scope.questionType === "course"){
			$scope.courseQuestions.push($scope.questObj);
		}

	};


	$scope.ok = function () {
		
		$scope.templateObj = {
			Title: $scope.titleIS,
			TitleEN: $scope.titleENG,
			IntroText: $scope.introIS,
			IntroTextEN: $scope.introENG,
			CourseQuestions: $scope.courseQuestions,
			TeacherQuestions: $scope.teacherQuestions
		};

		adminFactory.addTemplate($scope.templateObj);
		$modalInstance.close();
	};

	$scope.cancel = function () {
		console.log("TODO: ERASE changes");
		$modalInstance.dismiss('cancel');
	};
}]);