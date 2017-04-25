/**
 * Created by kkc on 4/23/17.
 */
app.filter('camelcaseFilter',function () {
    return function (sentence){
        var myString=sentence.toUpperCase()[0]+sentence.substr(1); //first convert the first letter to uppercase

            var newString = "";
            for (var i = 0; i < myString.length; i++) {

                if (myString[i] == myString.toUpperCase()[i]) {// check presence of Uppercase letter in word and append space
                    newString = newString + " ";               // add space in front of the upper case letter
                }
                newString = newString + myString[i];

            }
             return newString
}
})
