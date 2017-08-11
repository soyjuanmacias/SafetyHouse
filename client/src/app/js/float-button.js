(function() {
  'use strict';

  angular.module('MyApp')
    .controller('DemoCtrl', ['$scope',function($scope) {
      this.topDirections = ['left', 'up'];
      this.bottomDirections = ['down', 'right'];

      this.isOpen = false;
      var i = 0;

      $scope.$watch('demo.isOpen',function(state){
        console.log(++i+": "+state);
      });

      this.availableModes = ['md-fling', 'md-scale'];
      this.selectedMode = 'md-fling';

      this.availableDirections = ['up', 'down', 'left', 'right'];
      this.selectedDirection = 'up';
    }]);
})();
