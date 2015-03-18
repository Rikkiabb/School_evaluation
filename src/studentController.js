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


	$scope.getEvalByID = function (id, course, semester){

		studentFactory.getEvaluationById(id, function (eval){

			$scope.getTemplateById(id, course, semester, eval);

		});

	};

	$scope.getTemplateById = function (id, course, semester, eval){

		studentFactory.getTemplateById(eval.TemplateID, function (temp){

			$scope.getTeachers(id, course, semester, temp);

		});

	};

	$scope.getTeachers = function(id, course, semester, temp){

		studentFactory.getTeachers(course, semester, function(teach){

			$scope.makeTemplate(id, course, semester, temp, teach);

		});

	};

	$scope.makeTemplate = function(id, course, semester, temp, teach){

		// console.log("THIS", teach);
		// console.log(course, semester, "++++++++");
		$scope.modalInstance = $modal.open({
			templateUrl: 'evaluationModalContent.html',
			controller: 'EvaluationController',
			size: 'lg',
			resolve: {
			    TEMPLATE: function () {
			        return {
			          	template: temp,
			          	teachers: teach,
			          	course: course,
			          	semester: semester,
			          	evalID: id
			          }
			    }
			}
			// 		$scope.modalInstance.result.then(function () {
	      					
	    	// });
		});
	};



}]);