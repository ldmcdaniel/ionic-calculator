angular.module('starter')
.controller('MainCtrl', ['$scope', function($scope){
  $scope.message = 'hello';
  $scope.display = 0;

  var arr = [];
  var addTotal = 0;
  var subtractTotal = 0;
  var multiplyTotal = 0;
  var divideTotal = 0;

  $scope.numbers = function (x) {
    arr.push(x);
    $scope.display = arr.join('') * 1;
  }

  $scope.add = function () {
    addTotal = $scope.display;
    arr = [];
  }

  $scope.subtract = function () {
    subtractTotal = $scope.display;
    arr = [];
  }

  $scope.multiply = function () {
    multiplyTotal = $scope.display
  }

  $scope.divide = function () {
    divideTotal = $scope.display;
  }

  $scope.clear = function () {
    $scope.display = 0;
    addTotal = 0;
    arr = [];
  }

  $scope.equals = function () {
    $scope.display = $scope.display + addTotal;
  }

  $scope.squared = function () {
    $scope.display *= $scope.display;
  }

}]);
