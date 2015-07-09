angular.module('starter')
.controller('MainCtrl', ['$scope', function($scope){
  $scope.message = 'hello';
  $scope.display = 0;
  var operator = 0;
  var arr = [];
  var operand = 0;

  $scope.numbers = function (x) {
    arr.push(x);
    $scope.display = arr.join('') * 1;
  }
  $scope.operation = function (x) {
    operand = $scope.display;
    arr = [];
    operator = x;
  }

  $scope.clear = function () {
    $scope.display = 0;
    operand = 0;
    arr = [];
  }
  $scope.equals = function () {
    if (operator === 1) {
      $scope.display += operand;
    } else if (operator === 2) {
      $scope.display = operand - $scope.display;
    } else if (operator === 3) {
      $scope.display *= operand;
    } else if (operator === 4) {
      $scope.display = operand / $scope.display;
    }
  }

  $scope.squared = function () {
    $scope.display *= $scope.display;
  }
  $scope.squareRoot = function () {
    $scope.display = Math.sqrt($scope.display);
  }


  $scope.sine = function () {
    $scope.display = Math.sin($scope.display);
  }
  $scope.cosine = function () {
    $scope.display = Math.cos($scope.display);
  }
  $scope.tangent = function () {
    $scope.display = Math.tan($scope.display);
  }
  $scope.arcsine = function () {
    $scope.display = Math.asin($scope.display);
  }
  $scope.arccosine = function () {
    $scope.display = Math.acos($scope.display);
  }
  $scope.arctangent = function () {
    $scope.display = Math.atan($scope.display);
  }

}]);
