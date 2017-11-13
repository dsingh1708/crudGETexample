var app = angular.module("CrudDemoApp",[]);

app.controller(["myCtrl",function($scope,$http){
	
	$scope.get = function() { 
		$http({
			method: 'GET',
			url: 'http://localhost:8086/Getbird'
		  }).then(function successCallback(response) {
				console.log("Entered in successCallback ");

				console.log(response.status);
				console.log(response.statusText);
				console.log(response.statusText);
				$scope.birdsapi = response.data;
			}, function errorCallback(response) {
				console.log("Entered in errorCallback ");
				console.log(response.xhrStatus);
				console.log(response.status);
				console.log(response.statusText);
		});   
				};

}]);