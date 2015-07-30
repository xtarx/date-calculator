'use strict';

describe('Controller: EdgesCtrl', function () {
	var scope, http, response;  


	beforeEach(module('swFrontApp'));


    beforeEach(inject(function($rootScope, $httpBackend, $controller) {
		http=$httpBackend; 
		http.whenGET('/api/edges').respond(response);
		response=[{key:'hello'}];
		scope = $rootScope.$new();
		$controller('EdgesCtrl', {
			$scope: scope
		});

	}));

	afterEach(function  () {
		http.verifyNoOutstandingExpectation();
		http.verifyNoOutstandingRequest();
	})


	it('makes http request to fetch edges',function(){
		// http.expectGET('/api/edges');	
		http.flush;
	});

});