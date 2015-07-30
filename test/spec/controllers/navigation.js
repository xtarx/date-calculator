'use strict';

describe('NavigationController', function () {
  var location,scope;  


  beforeEach(module('swFrontApp'));


  beforeEach(inject(function ($controller, $rootScope,
    $location) {
    location=$location;
    scope = $rootScope.$new();
    $controller('NavigationController', {
      $scope: scope
    });

  }));

  describe('isActive',function(){
    
    it('retruns true when paths are the same',function(){
      location.path('/test');
      expect(scope.isActive('/test')).toBeTruthy();
    });

    it('retruns true if it starts with the same word',function(){
      location.path('/test/1/show');
      expect(scope.isActive('/test')).toBeTruthy();
    });



  });

});