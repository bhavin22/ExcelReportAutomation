reportAutomation.controller('homeController', ['$scope', '$rootScope', '$location', '$http', '$timeout', function($scope, $rootScope, $location, $http, $timeout) {
	$http.get('getNoDiaryData').then(function (rows) {
    	$scope.noDairyTableHead = ["Client Code","Client Name","Total Amount","Current Amount","Unallocated Amt","Month 1","Month 2","Month 3","Between 4-6 Months","Over 6 Months"];
		$scope.noDairyData = rows.data;
		$scope.raisedDairies = [];
		$scope.unRaisedDairies = [];
		$timeout(function() {
			$('.raisedDairies').on('change', function(evt) {
				if(evt.currentTarget.checked) {
					var index = $scope.unRaisedDairies.indexOf(evt.currentTarget.id);
					if (index > -1) {
					    $scope.unRaisedDairies.splice(index, 1);
					} else {
						$scope.raisedDairies.push(evt.currentTarget.id);
					}
				} else {
					var index = $scope.raisedDairies.indexOf(evt.currentTarget.id);
					if (index > -1) {
					    $scope.raisedDairies.splice(index, 1);
					} else {
						$scope.unRaisedDairies.push(evt.currentTarget.id);
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
	        		$location.path("/");
	        	} else {
	        		alert("Error while saving data!");
	        	}
			});
	  	}
		
  	});
}]);