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

reportAutomation.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.myEnter);
                });

                event.preventDefault();
            }
        });
    };
});

reportAutomation.run(function($rootScope) {
 	$rootScope.isAuthenticated = false;
 	$rootScope.user = "";
});