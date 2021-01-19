'use strict';

var view1 = angular.module('myApp.view1', ['ngRoute'])

view1.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    // controller: 'View1Ctrl'
  });
}])

// view1.controller('View1Ctrl', ['$scope', 'CalcService', function($scope, CalcService) {
//   $scope.square = function() {
//     $scope.result = CalcService.square($scope.number)
//   }
// }]);
// view1.factory('MathService', function() {
//   var factory = {};
//   factory.multiply = function(a, b) {
//      return a * b
//   }  
//   return factory;
// }); 
// view1.service('CalcService', function(MathService) {
//   this.square = function(a) {
//      return MathService.multiply(a,a);
//   }
// });

view1.service('myService', function() {
  console.log("From outside")
  this.hello = function() {
    return "this is your response!!!"
  }
});