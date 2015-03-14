angular.module("EvalApp").controller("StudentController", ["$scope", "studentFactory", "$modal", 
function($scope, studentFactory, $modal){

	$scope.myCourses = [];
	$scope.myEval = [];

	studentFactory.courses(function (courses){
		$scope.myCourses = courses;
	});

	studentFactory.evaluations(function (eval){
		$scope.myEval = eval;
	});

	$scope.getEvalByID = function (id){

		studentFactory.getEvaliationById(id, function (eval){

			studentFactory.getTemplateById(eval.TemplateID , function (temp) {

				$scope.modalInstance = $modal.open({
			      	templateUrl: 'evaluationModalContent.html',
			      	controller: 'EvaluationController',
			      	size: 'lg',
			      	resolve: {
		        		TEMPLATE: function () {
		          			return temp;
		        		}
		      		}
		    	});
			});

		})

	};
	// $scope.myCourses = sessionService.getCourses();
	// $scope.myEval = sessionService.getEvaluations();



}]);