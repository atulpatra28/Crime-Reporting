app.controller('reportController', function ($scope, $http) {
    $scope.crime = {};
    $scope.message = "";

    $scope.submitReport = function () {
        $http.post('/api/report', $scope.crime).then(function (response) {
            $scope.message = "Report submitted successfully!";
            $scope.crime = {}; // Reset form
        }, function (error) {
            $scope.message = "Failed to submit report.";
        });
    };
});
