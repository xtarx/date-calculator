'use strict';
angular.module('dateCounter')
    .service('OperationTypes', function () {
        this.query = function () {
            return [
                {
                    name: 'Add',
                    value: 'add',
                    type: 'days',
                    op: '+',
            }, {
                    name: 'Subtract',
                    value: 'subs',
                    type: 'days',
                    op: '+',
            }, {
                    name: 'Diffrence',
                    value: 'diffrence',
                    type: 'date',
                    op: '+',
            },

        ];
        }

        this.getOperation = function (operation) {
            return '+';
        }
    });

app.factory('addDays', [function () {
    return {
        name: 'addDays',
        calculate: function (startDate, days) {
            var splittedDate = startDate.split('/');
            var startDate = new Date(splittedDate[2], splittedDate[1], splittedDate[0]);
            var newDate = new Date();
            newDate.setDate(startDate.getDate() + days);
            return newDate;
        },

    };
}]);
app.factory('subtractDays', [function () {
    return {
        name: 'subtractDays',
        calculate: function (startDate, days) {
            var splittedDate = startDate.split('/');
            var startDate = new Date(splittedDate[2], splittedDate[1], splittedDate[0]);
            var newDate = new Date();
            newDate.setDate(startDate.getDate() - days);
            return newDate;
        },

    };
}]);
app.factory('dateDiffrence', ['$filter', 'moment', 'amMoment', 'angularMomentConfig', function ($filter, moment, amMoment, angularMomentConfig) {
    return {
        name: 'dateDiffrence',
        calculate: function (startDate, days) {
            var newDate = new Date();
            //            return $filter('lowercase')(days);
            return $filter('amDifference')(newDate, null, 'days');

        },

    };
}]);
