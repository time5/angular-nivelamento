(function() {
	'use strict';

	var app = angular.module('app');

	app.config(['$urlRouterProvider', '$stateProvider', configure]);

	function configure($urlRouterProvider, $stateProvider) {
		$stateProvider
			.state('app', {
				url: '',
				abstract: true,
				templateUrl: './src/layout/shell.html'
			});


		$urlRouterProvider.otherwise('product/list');
	}


	

})();


 