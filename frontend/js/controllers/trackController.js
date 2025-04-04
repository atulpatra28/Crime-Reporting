app.controller('trackController', function ($scope, $http) {
    $scope.caseId = "";
    $scope.caseDetails = null;

    $scope.trackCase = function () {
        $http.get('/api/track/' + $scope.caseId).then(function (response) {
            $scope.caseDetails = response.data;
        }, function (error) {
            $scope.caseDetails = null;
            alert("Case not found.");
        });
    };
});
