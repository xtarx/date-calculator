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
                    value: 'sub',
                    type: 'days',
                    op: '+',
            }, {
                    name: 'Diffrence',
                    value: 'diff',
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
            console.log(this.name + " was called with " + startDate + " and " + days);
            var splittedDate = startDate.split('/');
            var startDate = new Date(splittedDate[2], splittedDate[1], splittedDate[0]);
            var newDate = new Date();
            newDate.setDate(startDate.getDate() + parseInt(days, 10));
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
app.factory('dateDiffrence', [function ($filter, moment, amMoment, angularMomentConfig) {
    return {
        name: 'dateDiffrence',
        calculate: function (startDate, endDate) {

            var splittedStartDate = startDate.split('/');
            var splittedEndDate = endDate.split('/');

            var startDate = new Date(splittedStartDate[2], splittedStartDate[1] - 1, splittedStartDate[0]);
            var endDate = new Date(splittedEndDate[2], splittedEndDate[1] - 1, splittedEndDate[0]);

            var miliseconds = endDate - startDate;
            var seconds = miliseconds / 1000;
            var minutes = seconds / 60;
            var hours = minutes / 60;
            var days = hours / 24;

            
//            var person = {firstName:"John", lastName:"Doe", age:46};

            return days;
//            return miliseconds;

            //now
            //            var now = new Date();
            //            var startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            //            //            var nowTimestamp = startOfDay / 1000;
            //            var nowTimestamp = startOfDay;
            //
            //            //if date is before Today, then enddate is fromtoday-enddate + fromtoday-startDate
            //            //            startDate  endDate
            //            console.log('from date ' + startDate);
            //            console.log('end date ' + endDate);
            //            console.log('now date ' + nowTimestamp);
            //            var newEndDateTimeStamp = (endDate - startDate) + (nowTimestamp - startDate);
            //            var newEndDate = new Date();
            //            newEndDate.setTime(nowTimestamp.getTime() + (newEndDateTimeStamp));
            //            console.log('newEndDate ' + newEndDate);
            //            console.log('newEndDate ' + newEndDate/1000);
            //            return newEndDate/1000;

            //if date is after Today, then enddate is fromtoday-enddate - fromtoday-startDate





        },

    };
}]);
