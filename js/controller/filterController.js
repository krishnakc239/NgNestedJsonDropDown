/**
 * Created by kkc on 4/22/17.
 */
angular.module('myApp').controller('filterController',function ($scope,$filter) {
    $scope.today=new Date();
    $scope.camelCase= function(){
       $scope.camelcase= $filter('camelcaseFilter')($scope.my_text);
    }
    $scope.dateDifferrence=function () {

        var DateDiff = {
            inHour: function (d1, d2) {
                var t2 = d2.getTime();
                var t1 = d1.getTime();
                return parseInt((t2-t1)*60/(24*3600*1000));
                console.log(parseInt(t2-t1))

            },

            inDays: function(d1, d2) {
                var t2 = d2.getTime();
                var t1 = d1.getTime();

                return parseInt((t2-t1)/(24*3600*1000));
            },

            inWeeks: function(d1, d2) {
                var t2 = d2.getTime();
                var t1 = d1.getTime();

                return parseInt((t2-t1)/(24*3600*1000*7));
            },

            inMonths: function(d1, d2) {
                var d1Y = d1.getFullYear();
                var d2Y = d2.getFullYear();
                var d1M = d1.getMonth();
                var d2M = d2.getMonth();

                return (d2M+12*d2Y)-(d1M+12*d1Y);
            },

            inYears: function(d1, d2) {
                return d2.getFullYear()-d1.getFullYear();
            }
        }
        DateDiff.inHour(d1,d2);

        // var dString = "May, 20, 1984";

        var d1 = new Date($scope.userDate);
        var d2 = new Date();

        console.log("<br />Number of <b>days</b> since "+$scope.userDate+": "+DateDiff.inDays(d1, d2));
        console.log("<br />Number of <b>weeks</b> since "+$scope.userDate+": "+DateDiff.inWeeks(d1, d2));
        console.log("<br />Number of <b>months</b> since "+$scope.userDate+": "+DateDiff.inMonths(d1, d2));
        console.log("<br />Number of <b>years</b> since "+$scope.userDate+": "+DateDiff.inYears(d1, d2));


    }


})
