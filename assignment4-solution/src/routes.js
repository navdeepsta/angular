(function() {
	'use strict';
	
	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function RoutesConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		/*Set up UI states*/
		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'src/menuapp/templates/home.template.html'
		})
		.state('categories', {
            url: '/categories',
            templateUrl: 'src/menuapp/templates/categories.template.html',
            controller: 'CategoriesController as categoryList',
            resolve: {
            	categories: ['MenuDataService', function(MenuDataService) {
            		return MenuDataService.getAllCategories();
            	}]
            }
		})
		.state('items', {
			url: '/items/{categoryShortName}',
			templateUrl: 'src/menuapp/templates/items.template.html',
			controller: 'ItemsController as itemList',
			resolve: {
            	items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
            		return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            		            	}]
            }
		});
	}


})();