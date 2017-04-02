(function() {
  'use strict';

  var product = angular.module('app.product');

  product.controller('ProductListController', ['$scope', 'Product', 'toastr', ProductListController]);

  function ProductListController($scope, Product, toastr) {
    $scope.products = Product.getProducts();
    $scope.isLoading = false;


    $scope.removeProduct = function(productId) {
      $scope.products = Product.removeProduct(productId);
    };   
    

  }

})();