(function() {
  'use strict';

  var product = angular.module('app.product');

  product.controller('ProductListController', ['$scope', 'Product', ProductListController]);

  function ProductListController($scope, Product) {
    $scope.products = Product.getProducts();
    $scope.isLoading = false;


    $scope.removeProduct = function(productId) {
      $scope.products = Product.removeProduct(productId);
    };   
    

  }

})();