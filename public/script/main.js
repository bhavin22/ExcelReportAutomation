var reportAutomation = angular.module('reportAutomation', ['ngRoute']);

reportAutomation.config(function($routeProvider) {
	$routeProvider
		// route for the home page
		.when('/', {
			templateUrl : 'views/login.html',
			controller  : 'loginController'
		})

		.when('/home', {
			templateUrl : 'views/home.html',
			controller  : 'homeController'
		})

		.when('/login', {
			templateUrl : 'views/login.html',
			controller  : 'loginController'
		})

		.otherwise({
			redirectTo: '/'
		});
});

reportAutomation.run(function($rootScope) {
 	$rootScope.isAuthenticated = false;
});