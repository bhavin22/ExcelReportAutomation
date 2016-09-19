var reportAutomation = angular.module('reportAutomation', ['ngRoute']);

reportAutomation.config(function($routeProvider) {
	$routeProvider
		// route for the home page
		.when('/', {
			templateUrl : 'views/home.html',
			controller  : 'homeController'
		})

		.when('/home', {
			templateUrl : 'views/home.html',
			controller  : 'homeController'
		})

		.otherwise({
			redirectTo: '/'
		});
});

interviewApp.run(function($rootScope) {
 	
});