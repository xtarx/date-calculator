    'use strict';

    var app = angular.module('dateCounter');
    app.controller('DateCtrl', ['$scope', '$filter', 'OperationTypes', 'addDays', 'subtractDays', 'dateDiffrence', function ($scope, $filter, OperationTypes, addDays, subtractDays, dateDiffrence) {

        //        $scope.errors = {};
        $scope.results = '';
        $scope.operations = OperationTypes.query();
        $scope.selectedOperation = $scope.operations[2];
        $scope.isDiff = false;
        $scope.fromDate = $filter('date')(new Date(), 'dd/MM/yyyy');
        //        $scope.toDate = $filter('date')(new Date(), 'dd/MM/yyyy');
        $scope.endDate;



        $scope.operationChange = function () {
            $scope.results = '';
            $scope.fromDate = $filter('date')(new Date(), 'dd/MM/yyyy');
            $scope.noDays='';
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
                    if (!$scope.noDays || !$scope.fromDate) {
                        return false;
                    }
                    operationToPerform = addDays;
                    $scope.results = operationToPerform.calculate($scope.fromDate, $scope.noDays);
                    break;
                case 'sub':
                    if (!$scope.noDays || !$scope.fromDate) {
                        return false;
                    }
                    operationToPerform = subtractDays;
                    $scope.results = operationToPerform.calculate($scope.fromDate, $scope.noDays);
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
