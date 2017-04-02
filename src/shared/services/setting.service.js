(function() {
  'use strict';

  var shared = angular.module('app.shared');

  shared.factory('Setting', Setting);

  function Setting() {
    var configs = {
      apiUrl: 'http://localhost:8000/mocks/'
    };


    return configs;
  }

})();