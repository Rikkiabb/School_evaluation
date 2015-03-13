angular.module("EvalApp").factory('sessionService', function(){

	
	var authToken = null;
	var user = {};
	var courses = [];
	var evaluations = [];

	return{

		setToken: function(token){

			authToken = token;
		},

		getToken: function(){
			return authToken;
		},

		setCourses: function(course){
			courses = course;
		},

		getCourses: function(){
			return courses;
		},

		setEvaluations: function(evaluation){
			evaluations = [{"ID":1,"CourseID":"T-427-WEPO","CourseName":"Vefforritun II","CourseNameEN":"Web Programming II","TemplateName":"Heimska fucking temp", "TemplateNameEN":"STUPID FUCKING TEMP","Semester":"RIGHT MOTHERFUCKING NOW!"}];
			// evaluations = evaluation;
		},

		getEvaluations: function(){
			return evaluations;
		},

		setUser: function(_user){
			user = _user;
		},

		getUser: function(){
			return user;
		}

	};
});