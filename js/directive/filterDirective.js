/**
 * Created by kkc on 4/22/17.
 */
app.directive('filterDirective',function () {
    return{
        restrict:'EA',
        templateUrl:'view/filterDirective.html',
        controller:'filterController'
    }
})