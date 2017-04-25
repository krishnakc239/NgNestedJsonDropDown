/**
 * Created by kkc on 4/25/17.
 */
app.controller('infiniteScrollController', function ($scope) {
    $scope.infiniteList = [];
    $scope.incr = 1;

    $scope.scrollTriggered = "";

    $scope.loadMore = function(){

        $scope.scrollTriggered += " Scroll Triggered"
        for(var i = 0; i< 100; i++){
            $scope.infiniteList.push("Item " + $scope.incr);
            $scope.incr +=1;
        }
    };
});
