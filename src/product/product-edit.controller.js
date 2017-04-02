(function() {

  var product = angular.module('app.product');

  product.controller('ProductEditController',['$scope', '$state', 'Product', 'toastr', ProductEditController]);

  function ProductEditController($scope, $state, Product, toastr) {
    $scope.product = Product.getProduct($state.params.id);

    $scope.saveProduct = function() {
      var product = angular.copy($scope.product);
      Product.saveProduct($state.params.id, product);
      toastr.success("Producto editado!", "Produto editado com successo!");
      $state.go('app.product-list');
    }

  }


})();