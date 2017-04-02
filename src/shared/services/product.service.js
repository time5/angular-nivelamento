(function() {
  'use strict';

  var shared = angular.module('app.shared');

  shared.service('Product', ['$http', 'Setting', Product]);

  function Product($http, Settings) {
    var self = this;

    self.products = [
      {"id": 1, "name": "Iphone 6S", "price": 2000.50 },
      {"id": 2, "name": "Galaxy S5", "price": 1500.50 },
      {"id": 3, "name": "Iphone 7", "price": 1300.50 },
      {"id": 4, "name": "Galaxy S8", "price": 555.50 },
      {"id": 5, "name": "Moto X Play", "price": 800.50 },
      {"id": 6, "name": "ASUS Zenfone", "price": 5546.50 },
      {"id": 7, "name": "Capinha para Moto X", "price": 1554.50 },
      {"id": 8, "name": "Moto Z", "price": 1548.50 }
    ];

    self.getProducts = function() {
      return self.products;
    }

    self.removeProduct = function(productId) {
      self.products = self.products.filter(function(product) {
        return !product.id == productId;
      });

      return self.products;
    }
  }

})();




