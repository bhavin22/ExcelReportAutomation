reportAutomation.controller('homeController', ['$scope', '$rootScope', '$location', '$http', '$timeout', function($scope, $rootScope, $location, $http, $timeout) {
	if(!$rootScope.isAuthenticated) {
		$location.path('/login');
	}
	$http.get('getNoDiaryData').then(function (rows) {
    	$scope.noDiaryTableHead = ["Client Code","Client Name","Total Amount","Current Amount","Unallocated Amt","Month 1","Month 2","Month 3","Between 4-6 Months","Over 6 Months"];
		$scope.noDiaryData = rows.data;
		$scope.raisedDairies = [];
		$scope.unRaisedDairies = [];
		$timeout(function() {
			$('.raisedDiaries').on('change', function(evt) {
				var id = $(this).parent().parent().find("td:first").text().trim();
				if(evt.currentTarget.checked) {
					var index = $scope.unRaisedDairies.indexOf(id);
					if (index > -1) {
					    $scope.unRaisedDairies.splice(index, 1);
					} else {
						$scope.raisedDairies.push(id);
					}
				} else {
					var index = $scope.raisedDairies.indexOf(id);
					if (index > -1) {
					    $scope.raisedDairies.splice(index, 1);
					} else {
						$scope.unRaisedDairies.push(id);
					}
				}
			});
		}, 1000);

		$scope.saveData = function(){
			$http.post('updateRaisedCheck', {
	            raised : $scope.raisedDairies,
	            unraised : $scope.unRaisedDairies
	        }).then(function(data){
	        	if(data.status == 200) {
	        		alert("Data Saved Successfully!");
	        	} else {
	        		alert("Error while saving data!");
	        	}
			});
	  	}
  	});
}]);