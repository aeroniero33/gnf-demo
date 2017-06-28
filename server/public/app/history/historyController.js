(function() {
    'use strict';

    angular
        .module('app')
        .controller('HistoryController', Controller);

    Controller.$inject = ['history'];

    function Controller(history, $http) {
      var vm = this;
      vm.history = history;
      console.log('registering controller x');
    }
})();
