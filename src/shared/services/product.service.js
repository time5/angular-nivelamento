(function() {
  'use strict';

  var shared = angular.module('app.shared');

  shared.service('Product', ['$http', 'Setting', Product]);

  function Product($http, Settings) {
    var self = this;

    self.products = [
      {"id": 145, "name": "Iphone 6S", "price": 2000.50, "stock": 6 },
      {"id": 2345, "name": "Galaxy S5", "price": 1500.50, "stock": 6},
      {"id": 33453, "name": "Iphone 7", "price": 1300.50, "stock": 6},
      {"id": 443534, "name": "Galaxy S8", "price": 555.50, "stock": 6},
      {"id": 5534, "name": "Moto X Play", "price": 800.50, "stock": 6},
      {"id": 6435, "name": "ASUS Zenfone", "price": 5546.50, "stock": 6},
      {"id": 7345, "name": "Capinha para Moto X", "price": 1554.50, "stock": 6},
      {"id": 8345, "name": "Moto Z", "price": 1548.50, "stock": 9 }
    ];

    self.getProducts = function() {
      return self.products;
    }

    self.removeProduct = function(productId) {
      self.products = self.products.filter(function(product) {
        return product.id != productId;
      });

      return self.products;
    }

    self.addProduct = function(productModel) {
      self.products.push(productModel);
    }

    self.getProduct = function(id) {
      var theProduct = null;

      self.products.forEach(function(product) {
        if(product.id == id) {
          theProduct = product;
          return;
        }
      }); 

      return theProduct;
    }

    self.saveProduct = function(id, modelProduct) {
      var product = self.getProduct();
      var index = self.products.indexOf(product);

      self.products[index] = modelProduct;
    }
  }

})();




