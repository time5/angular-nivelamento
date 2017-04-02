(function() {
  'use strict';

  var product = angular.module('app.product');

  product.config(['$stateProvider', configure])

  function configure($stateProvider) {
    

    $stateProvider
      .state('app.product-list', {
        url: '/product/list',
        templateUrl: './src/product/product-list.html',
        controller: 'ProductListController'
      })
      .state('app.product-new', {
        url: '/product/new',
        templateUrl: './src/product/product-form.html',
        controller: 'ProductNewController'
      })
      .state('app.product-edit', {
        url: '/product/edit/:id',
        templateUrl: './src/product/product-form.html',
        controller: 'ProductEditController'
      });
  }

})();