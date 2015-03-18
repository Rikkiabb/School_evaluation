angular.module('EvalApp').controller('TemplateByIdController', ["$scope", "$modalInstance", "adminFactory", "ID", "toaster",
function ($scope, $modalInstance, adminFactory, ID, toaster) {

	$scope.template = {};
	$scope.startDate = new Date();
	$scope.endDate = new Date();

	$scope.showLanguage = "isl";
	$scope.changeLang = function(lang){
		$scope.showLanguage = lang;
	};


	adminFactory.getTemplateById(ID, function(template){
		$scope.template = template;
		$scope.courseQuestions = template.CourseQuestions;
		$scope.teacherQuestions = template.TeacherQuestions;
	});

	$scope.postEval = function(){

		if($scope.startDate >= $scope.endDate){
			toaster.pop('error', 'Error!', 'End date must be after the start date.');
			return;
		}

		$scope.newEval = {
			TemplateID: ID,
			StartDate: $scope.startDate.toISOString(),
			EndDate: $scope.endDate.toISOString()

		};
		adminFactory.createEvaluation($scope.newEval);
		$modalInstance.close();
	};

}]);