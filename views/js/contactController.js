/*
Author URI: https://www.kawami.io/
*/
var coding = angular.module('petroserv', [], function($interpolateProvider) {});

coding.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.classcv = "ng-valid"
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);




coding.controller('contactController', function($scope, $http, $timeout) {

    $scope.alertsuccess = false;
    $scope.alertdanger = false;
    $scope.sendMessage = function(form) {
        $scope.submitted = true;

      
       if (form.$valid) {

      
        $scope.submitted = false;


        $http.post('/ajax/contact-us', {
            data: $scope.p
         
      }).then(function(response) {
      
        var data = response.data

        if (data.error == true) {
            $scope.alertdanger = true;
            $timeout(function() {
                
                $scope.alertdanger = false;
            }, 5000)
        }
        else if (data.error == false) {
            $scope.alertsuccess = true;
            $timeout(function() {
              
                $scope.alertsuccess = false;
            }, 5000)

        }
    });
  }
}})



coding.controller('careersController', function($scope, $http, $timeout) {
$scope.classcv = "ng-invalid"
    $scope.alertsuccess = false;
    $scope.alertdanger = false;
    $scope.sendMessage = function(form) {
        $scope.submitted = true;
if(($scope.from) && (!$scope.from.cv))
        {
         $scope.classcv = "ng-invalid"
        }
      
       if (form.$valid) {




        var fd = new FormData();
        Object.keys($scope.p).forEach(function(key) {
            fd.append(key, $scope.p[key]);
        });


      
        $scope.submitted = false;


        $http.post('/ajax/careers',  fd, {
          transformRequest: angular.identity,
          headers: {'Content-Type': undefined}
      
      }).then(function(response) {
      
        var data = response.data

        if (data.error == true) {
            $scope.alertdanger = true;
            $timeout(function() {
                
                $scope.alertdanger = false;
            }, 5000)
        }
        else if (data.error == false) {
            $scope.alertsuccess = true;
            $timeout(function() {
              
                $scope.alertsuccess = false;
            }, 5000)

        }
    });
  }
}})
