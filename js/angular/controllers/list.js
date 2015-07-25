    'use strict';

    var app = angular.module('dateCounter');
    app.controller('DateCtrl', ['$scope', '$filter', 'OperationTypes', 'addDays', 'dateDiffrence', function ($scope, $filter, OperationTypes, addDays, dateDiffrence) {

        $scope.errors = {};
        $scope.results = {};
        $scope.operations = OperationTypes.query();
        $scope.selectedOperation = $scope.operations[0];

        $scope.fromDate = $filter('date')(new Date(), 'dd/MM/yyyy');
        $scope.toDate = $filter('date')(new Date(), 'dd/MM/yyyy');

        $scope.dateChange = function () {
            //noDays
        }
        $scope.operationChange = function () {
            console.log("operation just changed" + $scope.selectedOperation.op);
            //do logic depending on Operation
            $scope.results = dateDiffrence.calculate($scope.fromDate, 1);
            console.log("results " + $scope.results);
        }



        $scope.date = new Date();
        $scope.date = "2015-10-29T23:31:23Z";
        console.log("new momen " + $scope.date)

        $scope.myItem = {
            date: "2014-10-29T23:31:23Z"
        };

        function fixdate(date) {

            var splitted = date.split('/');
            return splitted[2] + splitted[1] + splitted[0];
        }

	}]);
