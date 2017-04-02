(function() {
  'use strict';

  var product = angular.module('app.product');

  product.controller('ProductListController', ['$scope', 'Product', ProductListController]);

  function ProductListController($scope, Product) {
    $scope.products = [];
    $scope.isLoading = true;

    Product.getProducts()
      .then(function(products) {
        $scope.isLoading = false;
        $scope.products = products;
      })
      .catch(function(err) {
        alert("Ocorreu um erro ao solicitar os dados!");
      });


    $scope.removeProduct = function(productId) {
      $scope.products = $scope.products.filter(function(product) {
        return !product.id == productId;
      });
    };

  }

})();