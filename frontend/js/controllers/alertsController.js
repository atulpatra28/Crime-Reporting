app.controller('alertsController', function ($scope, $http) {
    $scope.alerts = [];

    $http.get('/api/alerts').then(function (response) {
        $scope.alerts = response.data;
    }, function (error) {
        console.log("Failed to load alerts.");
    });
});
