(function() {

	'use strict';
	
	angular.module('data')
	.service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];
	function MenuDataService($http) {
		var service = this;
      
		service.getAllCategories = function() {
		
          return $http({
           	method: "GET",
           	url: ("https://davids-restaurant.herokuapp.com/categories.json")
           }).then(function (response) {
            var categories = [];
    		    var data = response.data;
            for(var i = 0; i < data.length; ++i) {
            		categories.push(data[i]);	
            }

            return categories;
            
    	   }).catch(function (error) {
            console.log("Something went wrong");
    	   });
		}

		service.getItemsForCategory = function(categoryShortName) {
		  
            var urlPath = "https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName;
            return $http({
            method: "GET",
            url: (urlPath)
           }).then(function (response) {
            var items = [];
            var data = response.data.menu_items;
            for(var i = 0; i < data.length; ++i) {
             
                items.push(data[i]);
              
            }
            return items;
            
         }).catch(function (error) {
            console.log("Something went wrong");
         });
		}
	}

})();