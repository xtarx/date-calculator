    'use strict';

    var app = angular.module('dateCounter');
    app.controller('DateCtrl', ['$scope', '$filter', 'OperationTypes', 'numericDateOperation', 'dateDiffrence', function ($scope, $filter, OperationTypes, numericDateOperation, dateDiffrence) {

        //        $scope.errors = {};
        $scope.results = '';
        $scope.operations = OperationTypes.query();
        $scope.selectedOperation = $scope.operations[0];
        $scope.isDiff = false;
        $scope.fromDate = $filter('date')(new Date(), 'dd/MM/yyyy');
        $scope.endDate;



        $scope.operationChange = function (operation) {

            $scope.selectedOperation = operation;

            console.log("selected op  " + $scope.selectedOperation.value);
            console.log("selected op type " + $scope.selectedOperation.type);
            $scope.results = '';
            $scope.fromDate = $filter('date')(new Date(), 'dd/MM/yyyy');
            $scope.noDays = '';
            $scope.dateChange();
        }

        $scope.dateChange = function () {
            //noDays
            //wait for 1 sec
            //make sure all fields are not empty and correct
            //check operation
            //perfrom operation
            $scope.results = '';
            var operationToPerform;
            switch ($scope.selectedOperation.value) {


                case 'add':
                    if (!$scope.fromDate) {
                        return false;
                    }
                    operationToPerform = numericDateOperation;
                    $scope.results = operationToPerform.calculate(true, $scope.fromDate, $scope.noDays, $scope.noWeeks, $scope.noMonths, $scope.noYears);
                    break;
                case 'sub':
                    if (!$scope.fromDate) {
                        return false;
                    }
                    operationToPerform = numericDateOperation;
                    $scope.results = operationToPerform.calculate(false, $scope.fromDate, $scope.noDays, $scope.noWeeks, $scope.noMonths, $scope.noYears);
                    break;
                case 'diff':
                    if (!$scope.fromDate || !$scope.toDate) {
                        return false;
                    }
                    $scope.isDiff = true;
                    operationToPerform = dateDiffrence;
                    $scope.results = operationToPerform.calculate($scope.fromDate, $scope.toDate);
                    break;
                default:
                    if (!$scope.fromDate || !$scope.toDate) {
                        return false;
                    }
                    $scope.isDiff = true;
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
