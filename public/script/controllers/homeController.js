reportAutomation.controller('homeController', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {

	var noDairyHead = ["Client Code","Client Name","Total Amount","Current Amount","Unallocated Amt","Month 1","Month 2","Month 3","Between 4-6 Months","Over 6 Months"];
	var noDairyDataArr = [{
	"_id": "a",
	"Client Code": "AXLB04",
	"Client Name": "XX Person",
	"Email Address": "XY@XY.com",
	"Mobile Number": "087XXXXXXX ", 
	"Home Number " : "01 XXXXXXX ", 
	"Client Department Code " : "D1 ", 
	"Client Department Name " : "Website ", 
	"Client Handler Code " : "MR ", 
	"Client Handler Name " :"Mike Ryan",
	"Total Amount": 425.95,
	"Current Amount": 425.95,
	"Unallocated Amt" : 0, 
	"Month 1" : 0, 
	"Month 2" : 0, 
	"Month 3" : 0, 
	"Between 4-6 Months" : 0, 
	"Over 6 Months" : 0, 
	"Year To Date Comm " : 38.75, 
	"Year To Date Fees " : 0, 
	"Year To Date Gross " : 625.95, 
	"Year To Date Total " : 625.95, 
	"Vlookup " : "AXLB04 " 
	}, 
	{
		"_id": "b",
		"Client Code": "AXLB05",
		"Client Name" : "XX Person ", 
		"Email Address " : "XY @XY.com ", 
		"Mobile Number " : "087 XXXXXXX ", 
		"Home Number " : "01 XXXXXXX ", 
		"Client Department Code " : "B1", 
		"Client Department Name " : "Phone ", 
		"Client Handler Code " : "GO",
		"Client Handler Name " : "Gary ",
		"Total Amount" : 95.78, 
		"Current Amount" : 0, 
		"Unallocated Amt" : 1039.62,
		"Month 1": 95.78,
		"Month 2": 0,
		"Month 3": 0,
		"Between 4-6 Months": 0,
		"Over 6 Months" : 0, 
		"Year To Date Comm " : -89.89, 
		"Year To Date Fees " : 0, 
		"Year To Date Gross " : -943.84, 
		"Year To Date Total " : -943.84, 
		"Vlookup " : "AXLB05 " }];
	console.log(noDairyHead);
	$scope.noDairyTableHead = noDairyHead;
	$scope.noDairyData = noDairyDataArr;
}]);