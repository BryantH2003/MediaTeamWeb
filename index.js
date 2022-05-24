date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
dayOfWeek = date.getDay();

if (month == 1) {
    alphamonth = "January";
} else if (month == 2) {
    alphamonth= "Feburary";
} else if (month == 3) {
        alphamonth= "March";
} else if (month == 4) {
    alphamonth= "April";
} else if (month == 5) {
    alphamonth= "May";
} else if (month == 6) {
    alphamonth= "June";
} else if (month == 7) {
    alphamonth= "July";
} else if (month == 8) {
    alphamonth= "August";
} else if (month == 9) {
    alphamonth= "September";
} else if (month == 10) {
    alphamonth= "October";
} else if (month == 11) {
    alphamonth= "November";
} else if (month == 12) {
    alphamonth= "December";
}

if (dayOfWeek == 0) {
    dayOfWeekAlpha = "Sunday";
} else if (dayOfWeek == 1) {
    dayOfWeekAlpha= "Monday";
} else if (dayOfWeek == 2) {
    dayOfWeekAlpha= "Tuesday";
} else if (dayOfWeek == 3) {
    dayOfWeekAlpha= "Wednesday";
} else if (dayOfWeek == 4) {
    dayOfWeekAlpha= "Thursday";
} else if (dayOfWeek == 5) {
    dayOfWeekAlpha= "Friday";
} else if (dayOfWeek == 6) {
    dayOfWeekAlpha= "Saturday";
}