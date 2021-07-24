(function() {
	'use strict';
	
	angular.module('MenuApp')
	.component('items', {
		templateUrl: 'src/menuapp/templates/itemList.template.html',
		bindings: {
			list: '<'
		}
	});

})();
