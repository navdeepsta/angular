(function() {
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems' , FoundItems);

    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
    	var narrow = this;
        narrow.searchTerm = "";
        narrow.found = [];
        narrow.nothingFound = false;
        
    	narrow.narrowDown = function() {
            var searchTerm = narrow.searchTerm;

            if(narrow.searchTerm) {
    			var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
    			promise.then(function (response){
    			narrow.found = response;
            	checkFoundItemsList();

    			}).catch(function(error) {
    				console.log("Something went wrong");
    			});    		
            }else{
            	narrow.nothingFound = true;
            	narrow.found = [];
            }
    	}  	
        

       /* item will come from child's directive*/
    	narrow.removeItem = function(item) {
    	    	 narrow.found.splice(item, 1);
    	    	 checkFoundItemsList();
    	}

    	function checkFoundItemsList() {
    		if(!narrow.found.length) {
    	    	narrow.nothingFound = true;
    	    }else{
    	    	 	narrow.nothingFound = false;
    	    	 }
    	}   	
    }

    function FoundItems() {
    	var ddo = {
    		restrict: 'E',
    		scope: {
    			foundItems: '<',
    			remove: '&onRemove'
    		},
    		templateUrl: 'foundItems.html',
    		controller: FoundItemsDirectiveController,
    		controllerAs: 'list',
            bindToController: true
    	};
    	return ddo;
    }

    FoundItemsDirectiveController = function() {
    	    var list = this;

    }

    MenuSearchService.$inject = ['$http'];
	function MenuSearchService($http) {
    	var service = this;
       

    	service.getMatchedMenuItems = function(searchTerm) {
    	 

          return $http({
           	method: "GET",
           	url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
           }).then(function (response) {
            var foundItems = [];
    		var data = response.data.menu_items;
            for(var i = 0; i < data.length; ++i) {
            	if(data[i].description.indexOf(searchTerm) !== -1) {
            		foundItems.push(data[i]);
            	}
            }

              return foundItems;
            
    	   }).catch(function (error) {
            console.log("Something went wrong");
    	   });	 
          
    	};
	}



})();