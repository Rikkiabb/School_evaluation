angular.module('EvalApp').controller('ModalInstanceController', ["$scope", "$modalInstance", "toaster", function ($scope, $modalInstance, toaster) {

	$scope.showText = true;
	$scope.showMultiple = false;
	$scope.multipleType = undefined;
	$scope.questionType = undefined;
	$scope.courseQuestions = [];
	$scope.teacherQuestions = [];
	$scope.answersIS = [];
	$scope.answersENG = [];

	$scope.change = function(type){

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
		console.log("TODO: SAVE()");
		$modalInstance.close();
	};

	$scope.cancel = function () {
		console.log("TODO: ERASE changes");
		$modalInstance.dismiss('cancel');
	};
}]);