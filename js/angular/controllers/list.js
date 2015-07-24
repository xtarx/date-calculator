    'use strict';

    var app = angular.module('dateCounter');
    app.controller('DateCtrl', ['$scope', '$filter', 'OperationTypes', function ($scope, $filter, OperationTypes) {

        $scope.errors = {};
        $scope.results = {};
        $scope.operations = OperationTypes.query();
        //        $scope.operations = [
        //            {
        //                name: 'Add',
        //                value: 'Add',
        //                type: 'days',
        //                op: '+',
        //            }, {
        //                name: 'subs',
        //                value: 'subs',
        //                type: 'days',
        //                op: '+',
        //            }, {
        //                name: 'div',
        //                value: 'div',
        //                type: 'days',
        //                op: '+',
        //            },
        //
        //        ];
//        console.log("op1 is " + $scope.operations[1].name)

        $scope.fromDate = $filter('date')(new Date(), 'dd/MM/yyyy');
        $scope.toDate = $filter('date')(new Date(), 'dd/MM/yyyy');

        $scope.dateChange = function () {

        }
        $scope.operationChange = function () {
            console.log("operation just changed" +$scope.selectedOperation.op);
            //do logic depending on Operation
            
            
        
        }


        function fixdate(date) {

            var splitted = date.split('/');
            return splitted[2] + splitted[1] + splitted[0];
        }

	}]);
