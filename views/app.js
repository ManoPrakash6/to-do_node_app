 'use strict';
  var myApp = angular.module('spicyApp1', []);
  
  myApp.controller('SpicyController', function($scope) {
      $scope.spice = 'very';
  
      $scope.chiliSpicy = function() {
          $scope.spice = 'chili';
      };
  
      $scope.jalapenoSpicy = function() {
          $scope.spice = 'jalapeño';
      };
  });
  
  /*
  Copyright 2019 Google Inc. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at http://angular.io/license
  */