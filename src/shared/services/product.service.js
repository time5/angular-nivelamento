(function() {
  'use strict';

  var shared = angular.module('app.shared');

  shared.service('Product', ['$http', 'Setting', Product]);

  function Product($http, Settings) {
    var self = this;

    self.getProducts = function() {
      return $http.get(Settings.apiUrl + 'products-list.json')
        .then(function(response) {
          if(response.status == 200) {
            return response.data;
          }

          throw new Error('Error in server: ' + response.statusText);
        });
    }
  }

})();




