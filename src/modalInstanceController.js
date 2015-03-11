angular.module('EvalApp').controller('ModalInstanceController', ["$scope", "$modalInstance", function ($scope, $modalInstance) {

	$scope.showText = true;
	$scope.showMultiple = false;
	$scope.multipleType = undefined;
	$scope.questions = [];
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
		if($scope.showText){
			 $scope.questObj = {
				ID: $scope.questions.length,
				Text: $scope.textQuestionIS,
				TextEN: $scope.textQuestionENG,
				ImageUrl: "",
				type: "text"
			};

			$scope.questions.push($scope.questObj);
			$scope.textQuestionIS = "";
			$scope.textQuestionENG = "";
		}
		else if($scope.showMultiple){
			
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
					ID: $scope.questions.length,
					Text: $scope.multipleQuestionIS,
					TextEN: $scope.multipleQuestionENG,
					ImageUrl: "",
					type: $scope.multipleType,
					Answers: $scope.answers
				};
				
				$scope.questions.push($scope.questObj);
				$scope.answersIS = [];
				$scope.answersENG = [];
				$scope.multipleQuestionIS = "";
				$scope.multipleQuestionENG = "";
			}
			else{
				//TODO: ERROR MESSAGE
			}

			
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