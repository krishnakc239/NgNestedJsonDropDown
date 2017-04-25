/**
 * Created by kkc on 4/23/17.
 */

app.filter('dateDiffFilter', function(){
        return function(date){
            if (!date) return;
            var time = Date.parse(date),
                timeNow = new Date().getTime(),
                difference = timeNow - time,// in milliseconds
                seconds = Math.floor(difference / 1000),
                minutes = Math.floor(seconds / 60),
                hours = Math.floor(minutes / 60),
                days = Math.floor(hours / 24),
                months=Math.floor(days/ 30);

            if (months > 1) {
                return months + " months ago";
            }
            else if(months == 1){
                return " 1 months ago";
            }else if (days > 1) {
                return days + " days ago";
            } else if (days == 1) {
                return "1 day ago"
            } else if (hours > 1) {
                return hours + " hours ago";
            } else if (hours == 1) {
                return "an hour ago";
            } else if (minutes > 1) {
                return minutes + " minutes ago";
            } else if (minutes == 1){
                return "a minute ago";
            } else if(seconds > 1){
                return seconds+ " seconds ago";
            }else if(seconds == 1){
                return "just now";
            }
        }
    })
