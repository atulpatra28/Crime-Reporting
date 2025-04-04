var app = angular.module('crimeApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/report', {
            templateUrl: 'views/report.html',
            controller: 'reportController'
        })
        .when('/track', {
            templateUrl: 'views/track.html',
            controller: 'trackController'
        })
        .when('/alerts', {
            templateUrl: 'views/alerts.html',
            controller: 'alertsController'
        })
        .when('/analytics', {
            templateUrl: 'views/analytics.html',
            controller: 'analyticsController'
        })
        .otherwise({
            redirectTo: '/report'
        });
});
