    'use strict';

    var app = angular.module('dateCounter');
    app.controller('DateCtrl', ['$scope', '$filter', 'OperationTypes', 'numericDateOperation', 'dateDiffrence', function ($scope, $filter, OperationTypes, numericDateOperation, dateDiffrence) {

        $scope.operations = OperationTypes.query();
        $scope.selectedOperation = $scope.operations[0];
        init();


        function init() {
            $scope.results = '';
            $scope.fromDate = $filter('date')(new Date(), 'dd/MM/yyyy');
            $scope.toDate = "";
            $scope.noDays = '';
            $scope.noWeeks = '';
            $scope.noMonths = '';
            $scope.noYears = '';
            $scope.isDiff = false;
        }
        $scope.operationChange = function (operation) {

            $scope.selectedOperation = operation;
            init();
            $scope.dateChange();
        }

        $scope.dateChange = function () {
            $scope.results = '';
            var operationToPerform;
            var isAdd = false;
            switch ($scope.selectedOperation.value) {

                case 'add':
                    if (!$scope.fromDate) {
                        return false;
                    }
                    operationToPerform = numericDateOperation;
                    isAdd = true;
                    break;
                case 'sub':
                    if (!$scope.fromDate) {
                        return false;
                    }
                    operationToPerform = numericDateOperation;
                    break;

                case 'diff':
                    if (!$scope.fromDate || !$scope.toDate) {
                        return false;
                    }
                    $scope.isDiff = true;
                    operationToPerform = dateDiffrence;
                    break;

            }
            if ($scope.selectedOperation.value === 'diff') {
                $scope.results = operationToPerform.calculate($scope.fromDate, $scope.toDate);
            } else {
                $scope.results = operationToPerform.calculate(isAdd, $scope.fromDate, $scope.noDays, $scope.noWeeks, $scope.noMonths, $scope.noYears);
            }

        }


	}]);
