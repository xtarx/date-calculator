  'use strict';

var app = angular.module('dateCounter', ['ngResource','ui.date']);

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
// TODO:[x] Diffrence in weeks, months if possible.
// TODO:[x] validation.
// TODO: run only after blue by 1 sec.
// TODO: result date format.
// TODO: countdown.
// TODO:[x] add background image.
