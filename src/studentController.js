angular.module("EvalApp").controller("StudentController", ["$scope", "studentFactory", "$modal", 
function($scope, studentFactory, $modal){

	$scope.myCourses = [];
	$scope.myEval = [];

	//Get students courses.
	studentFactory.courses(function (courses){
		$scope.myCourses = courses;
	});

	//Get the students evaluation.
	studentFactory.evaluations(function (eval){
		$scope.myEval = eval;
	});


	//Used to get a template by ID.
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

	//Opens a modal for the student and creates the template.
	$scope.makeTemplate = function(id, course, semester, temp, teach){

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

		});
	};



}]);