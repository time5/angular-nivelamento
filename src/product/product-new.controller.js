(function() {
  'use strict';

  var product = angular.module('app.product');

  product.controller('ProductNewController', ['$scope', 'Product', 'toastr', '$state', ProductNewController]);

  function ProductNewController($scope, Product, toastr, $state) {
    
    $scope.saveProduct = function() {
      var productModel = angular.copy($scope.product);
      Product.addProduct(productModel);

      toastr.success('Sucesso!', 'Produto cadastrado com sucesso!');
      $state.go('app.product-list');
    };


  }

})();