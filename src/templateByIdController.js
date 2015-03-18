angular.module('EvalApp').controller('TemplateByIdController', ["$scope", "$modalInstance", "adminFactory", "ID", "toaster",
function ($scope, $modalInstance, adminFactory, ID, toaster) {

	$scope.template = {};
	$scope.startDate = new Date();
	$scope.endDate = new Date();

	$scope.showLanguage = "isl";
	
	//Change the language of the view.
	$scope.changeLang = function(lang){
		$scope.showLanguage = lang;
	};

	//Get the template and questions to be displayed.
	adminFactory.getTemplateById(ID, function(template){
		$scope.template = template;
		$scope.courseQuestions = template.CourseQuestions;
		$scope.teacherQuestions = template.TeacherQuestions;
	});

	$scope.postEval = function(){

		//End date cannot be less the start.
		if($scope.startDate >= $scope.endDate){
			toaster.pop('error', 'Error!', 'End date must be after the start date.');
			return;
		}

		$scope.newEval = {
			TemplateID: ID,
			StartDate: $scope.startDate.toISOString(),
			EndDate: $scope.endDate.toISOString()

		};
		//Post the evaluation.
		adminFactory.createEvaluation($scope.newEval);
		$modalInstance.close();
	};

}]);