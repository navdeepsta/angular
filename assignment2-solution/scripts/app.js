(function() {
'use strict';

	angular.module("ShoppingListCheckOff", [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController',AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];

	function ToBuyController(ShoppingListCheckOffService) {
		var buy = this;
		buy.toBuyList = ShoppingListCheckOffService.getToBuyList();
        buy.emptyToBuyList = false;
       
		buy.remove = function(itemIndex) {
			ShoppingListCheckOffService.removeItem(itemIndex);	
			showEmptyListMessage();
		}

		function showEmptyListMessage() {
			if(buy.toBuyList.length === 0)
		    buy.emptyToBuyList = true;
		    ShoppingListCheckOffService.setAlreadyBoughtStatus(false);
		}
		
	}


	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var bought = this;
		bought.alreadyBoughtList =  ShoppingListCheckOffService.getAlreadyBoughtList();

		bought.emptyAlreadyBoughtList = function() {
			return ShoppingListCheckOffService.getAlreadyBoughtStatus();
		}
      
	}

   
	function ShoppingListCheckOffService() {
	 	var service = this;

      	var toBuyList = [
  	    	{ name : "Cookie" , quantity : 4},
  	    	{ name : "Milk" , quantity : 2},
  	    	{ name : "Coconut" , quantity : 1},
  	    	{ name : "Ice Cream" , quantity : 1},
  	    	{ name : "Banana" , quantity : 6},
  	    	{ name : "Mango" , quantity : 2},
  	    	{ name : "Eggs" , quantity : 12},
		];
	
    	var alreadyBoughtStatus = true;
  
		var alreadyBoughtList = [];

    	service.removeItem = function(itemIndex) {
    		var item = toBuyList.splice(itemIndex, 1);
			alreadyBoughtList.push(item[0]);
    	};

    	service.getToBuyList = function() {
    		return toBuyList;
    	};

    	service.getAlreadyBoughtList = function() {
    		return alreadyBoughtList;
    	};

   		service.getAlreadyBoughtStatus = function() {
    		return alreadyBoughtStatus;
    	};

    	service.setAlreadyBoughtStatus = function(status) {
    		alreadyBoughtStatus = status;
    	};
    }

})();