reportAutomation.controller('loginController', ['$scope', '$rootScope', '$location', '$http', function($scope, $rootScope, $location, $http) {
	if($rootScope.isAuthenticated) {
		$location.path('/home');
	}
  	$scope.login = function() {
  		$http.post('login',{
  			user_name : $('#user_name').val(),
  			password : $('#password').val()
  		}).then(function(data){
  			if(data.data == "success") {
  				$rootScope.isAuthenticated = true;
  				$location.path('/home');
  			} else {
  				$("#msg").html(data.data);
  			}
  		});
  	}
}]);