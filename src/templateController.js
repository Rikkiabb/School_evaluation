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

	$scope.addQuestion = function(){
		if($scope.questionType === undefined){
			//TODO: error handling;
		}

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
				type: "text"
			};

			$scope.textQuestionIS = "";
			$scope.textQuestionENG = "";
		}
		else if($scope.showMultiple){
			
			if($scope.multipleType === undefined){
				toaster.pop('error', 'Error!', 'You have to select a type before creating the question.');
				return;
			}

			$scope.answers = [];
			if($scope.answersIS.length === $scope.answersENG.length){
				
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

				$scope.questObj = {
					ID: id,
					Text: $scope.multipleQuestionIS,
					TextEN: $scope.multipleQuestionENG,
					ImageUrl: "",
					type: $scope.multipleType,
					Answers: $scope.answers
				};
				
				
				$scope.answersIS = [];
				$scope.answersENG = [];
				$scope.multipleQuestionIS = "";
				$scope.multipleQuestionENG = "";
			}
			else{
				toaster.pop('error', 'Error!', 'Please have the same amount of English and Icelandic answers.');
			}

			
		}

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