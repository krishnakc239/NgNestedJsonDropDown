/**
 * Created by kkc on 4/22/17.
 */
app.controller('filterController',function ($scope,$filter) {
    $scope.today = new Date();
    $scope.camelCase = function () {
        $scope.camelcase = $filter('camelcaseFilter')($scope.my_text);
    }
    $scope.dateDifferrence = function (date) {
        $scope.differnce = $filter('dateDiffFilter')($scope.date)

    }
    $scope.array = [
        {date: "2013-09-01 18:02:00", event: "dinner"},
        {date: "2013-09-01 18:01:00", event: "snacks"},
        {date: "2013-09-01 10:00:00", event: "lunch"},
        {date: "2013-09-01 06:00:00", event: "brush"},
        {date: "2013-09-02 10:01:00", event: "lunch"},
        {date: "2013-09-02 18:03:00", event: "dinner"},
        {date: "2013-09-03 16:00:00", event: "snacks"},
        {date: "2013-09-03 18:00:00", event: "dinner"},
        {date: "2013-09-04 16:00:00", event: "snacks"},
        {date: "2013-09-04 06:00:00", event: "brush"},
        {date: "2013-09-04 10:01:00", event: "lunch"},
        {date: "2013-09-04 18:03:00", event: "dinner"},
    ];

})