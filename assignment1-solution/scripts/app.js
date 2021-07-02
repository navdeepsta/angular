(function() {
	
	'use strict';

	var app = angular.module("LunchCheck", []);

	app.controller("LunchCheckController", LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {
      $scope.message = "";
      $scope.items = "";
     

      $scope.checkItems = function() {
      	var msg = "";

      	if($scope.items == "") {
      		msg = "Please enter data first";
      		$scope.textColor = "red";
      	  } else {
      	  			var lunchItems = $scope.items.split(",");
            		if(lunchItems.length <= 3) {
            			msg = "Enjoy!";
            		} else {
            			msg = "Too much!";
          		  	}
          		  	$scope.textColor = "green";
      	  		 }
      	    $scope.message = msg;
      	}

    }
}
)();