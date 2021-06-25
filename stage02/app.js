(function() {
	'use strict';
	angular.module("firstApp", [])
	.controller('firstController', function($scope) {
		$scope.name = "Navdeep Singh";
		$scope.greet = function() {
			return "Hello";
		}; 
	});
})();