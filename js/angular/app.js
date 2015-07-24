  'use strict';

  var app = angular.module('dateCounter', ['ngResource']);


  app.filter('myDateFormat', function myDateFormat($filter) {
      return function (text) {
          var tempdate = new Date(text.replace(/-/g, "/"));
          return $filter('date')(tempdate, "dd/MM 'at' h:mma");
      }
  });


