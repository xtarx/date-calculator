    'use strict';

    var app = angular.module('dateCounter');
    app.controller('DateCtrl', ['$scope', '$filter', 'OperationTypes', 'addDays', 'subtractDays', 'dateDiffrence', function ($scope, $filter, OperationTypes, addDays, subtractDays, dateDiffrence) {

        $scope.errors = {};
        $scope.results = {};
        $scope.operations = OperationTypes.query();
        $scope.selectedOperation = $scope.operations[2];

        $scope.fromDate = $filter('date')(new Date(), 'dd/MM/yyyy');
        $scope.toDate = $filter('date')(new Date(), 'dd/MM/yyyy');
        $scope.endDate;



        var operationToPerform;
        $scope.dateChange = function () {
            //noDays
            //wait for 1 sec
            //make sure all fields are not empty and correct
            //check operation
            //perfrom operation

            switch ($scope.selectedOperation.value) {
                case 'add':
                    operationToPerform = addDays;
                    $scope.results = operationToPerform.calculate($scope.fromDate, $scope.noDays);
                    break;
                case 'sub':
                    operationToPerform = subtractDays;
                    $scope.results = operationToPerform.calculate($scope.fromDate, $scope.noDays);
                    break;
                case 'diff':
                    operationToPerform = dateDiffrence;
                    $scope.results = operationToPerform.calculate($scope.fromDate, $scope.toDate);
                    break;
                default:
                    operationToPerform = dateDiffrence;
                    $scope.results = operationToPerform.calculate($scope.fromDate, $scope.toDate);
                    break;
            }


        }


        function fixdate(date) {
            var splitted = date.split('/');
            return splitted[2] + splitted[1] + splitted[0];
        }

	}]);
