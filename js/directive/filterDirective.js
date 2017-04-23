/**
 * Created by kkc on 4/22/17.
 */
angular.module('myApp').directive('filterDirective',function () {
    return{
        restrict:'EA',
        templateUrl:'view/filterDirective.html',
        controller:'filterController'
    }
})