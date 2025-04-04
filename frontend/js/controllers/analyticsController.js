app.controller('analyticsController', function ($scope, $http) {
    $scope.strategy = "monthly";
    $scope.analysisResult = null;

    $scope.runAnalysis = function () {
        $http.get('/api/analytics?strategy=' + $scope.strategy).then(function (response) {
            $scope.analysisResult = response.data;
        }, function (error) {
            $scope.analysisResult = null;
        });
    };
});
