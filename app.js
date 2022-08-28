var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'HomeController'
        })
        .when('/th', {
            templateUrl: 'th.html',
            controller: 'THController'
        })
        .when('/sp', {
            templateUrl: 'sp.html',
            controller: 'SPController'
        })
        .when('/lh', {
            templateUrl: 'lh.html',
            controller: 'LHController'
        })
        .otherwise({redirect: '/'});
})
    app.controller('HomeController', function ($scope) {
        $scope.message = 'Day la noi dung duoc gui tu HomeController';
    });

    app.controller('THController', function ($scope) {
        $scope.message = 'Day la noi dung duoc gui tu THController';
    });
app.controller('SPController', function ($scope) {
    $scope.message = 'Day la noi dung duoc gui tu SPController';
});
app.controller('LHController', function ($scope) {
    $scope.message = 'Day la noi dung duoc gui tu LHController';
});



