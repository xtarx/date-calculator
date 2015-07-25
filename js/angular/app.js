  'use strict';

var app = angular.module('dateCounter', ['ngResource', 'angularMoment','ui.date']);

  //angular.module('dateCounter').constant('angularMomentConfig', {
  //    preprocess: 'unix ', // optional
  //    timezone: 'Europe/London' // optional
  //});


  app.filter('myDateFormat', function myDateFormat($filter) {
      return function (text) {
          var tempdate = new Date(text.replace(/-/g, "/"));
          return $filter('date')(tempdate, "dd/MM 'at' h:mma");
      }
  });
