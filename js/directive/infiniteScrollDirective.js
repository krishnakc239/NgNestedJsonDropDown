/**
 * Created by kkc on 4/25/17.
 */
app.directive('infiniteScrollDirective', function () {
    return{
        restrict :'EA',
        templateUrl: 'view/infiniteScrollDirective.html',
        controller :'infiniteScrollController'
    }
})