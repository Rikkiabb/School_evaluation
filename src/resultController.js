angular.module('EvalApp').controller('ResultController', ["$scope", "$modalInstance", "RESULT", "adminFactory",
function ($scope, $modalInstance, RESULT, adminFactory) {

	$scope.result = RESULT;
	$scope.courses = RESULT.Courses;
	$scope.teachers = [];
	$scope.teachName = [];

	$scope.showLanguage = "isl"

	$scope.changeLang = function(lang){
		$scope.showLanguage = lang;
	};
	
	$scope.getTeachName = function (SSN) {
		for(var i = 0; i < $scope.teachers.length; i++){
			if($scope.teachers[i].SSN === SSN){
				return $scope.teachers[i].FullName;
			}
		}
	}

	$scope.getTeach = function (cID, semester) {

		adminFactory.getTeachers(cID, semester, function(teachers) {
			$scope.teachers = teachers;
		});

		

		
	}

	console.log($scope.result);

	$scope.close = function () {
		$modalInstance.dismiss('cancel');
	}

}]);