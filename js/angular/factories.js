(function () {
    'use strict';
    angular.module('dateCounter')
        .service('OperationTypes', function () {
            this.query = function () {
                return [
                    {
                        name: 'Add',
                        value: 'add',
                        type: 'days',
                        eng: 'is',
                        op: '+',
            }, {
                        name: 'Subtract',
                        value: 'sub',
                        type: 'days',
                        eng: 'was',
                        op: '+',
            }, {
                        name: 'Diffrence',
                        value: 'diff',
                        type: 'date',
                        op: '+',
            },

        ];
            }

        })

    .factory('numericDateOperation', [function () {
        return {
            name: 'numericDateOperation',
            calculate: function (addOperation, startDate, days, weeks, months, years) {
                var splittedDate = startDate.split('/');
                var startDate = new Date(splittedDate[2], splittedDate[1], splittedDate[0]);
                var newDate = new Date();
                var totalTimetoAdd = 0;

                if (days) {
                    //add days
                    totalTimetoAdd += parseInt(days, 10);
                }
                if (weeks) {
                    //add weeks
                    totalTimetoAdd += parseInt(weeks, 10) * 7;
                }
                if (months) {
                    //add months
                    totalTimetoAdd += parseInt(months, 10) * 30;
                }
                if (years) {
                    //add years
                    totalTimetoAdd += parseInt(years, 10) * 365;
                }

                if (addOperation) {
                    newDate.setDate(startDate.getDate() + totalTimetoAdd);
                } else {

                    newDate.setDate(startDate.getDate() - totalTimetoAdd);
                }
                return newDate;
            },

        };
}])

    .factory('dateDiffrence', [function ($filter, moment, amMoment, angularMomentConfig) {
        return {
            name: 'dateDiffrence',

            dateDiff: function (datepart, fromdate, todate) {
                datepart = datepart.toLowerCase();
                var diff = todate - fromdate;
                var divideBy = {
                    w: 604800000,
                    d: 86400000,
                    h: 3600000,
                    m: 60000,
                    s: 1000
                };

                return Math.floor(diff / divideBy[datepart]);
            },

            calculate: function (startDate, endDate) {

                var splittedStartDate = startDate.split('/');
                var splittedEndDate = endDate.split('/');

                var startDate = new Date(splittedStartDate[2], splittedStartDate[1] - 1, splittedStartDate[0]);
                var endDate = new Date(splittedEndDate[2], splittedEndDate[1] - 1, splittedEndDate[0]);

                var date = {
                    type: 'date',
                    weeks: this.dateDiff('w', startDate, endDate),
                    days: this.dateDiff('d', startDate, endDate),
                    hours: this.dateDiff('h', startDate, endDate),
                    minutes: this.dateDiff('m', startDate, endDate),
                    seconds: this.dateDiff('s', startDate, endDate)
                };

                return date;

            },

        };
}]);
})();
