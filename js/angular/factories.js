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
                    name: 'subs',
                    value: 'subs',
                    type: 'days',
                    op: '+',
            }, {
                    name: 'div',
                    value: 'div',
                    type: 'days',
                    op: '+',
            },

        ];
        }
        
        this.getOperation=function(operation){
            return '+';
        }
    });
