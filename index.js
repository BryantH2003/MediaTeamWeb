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

function showMonths() {
  document.write ( 'hello' );
}

function checkCurrMonth() {
    if ( _i == 1) {
        document.write( '<li><button class="monthsButton" onclick="showMonths()"data-value="'+_i+'"'+_addClass+'>'+'Jan'+'</button></li>' );
      } else if ( _i == 2) {
        document.write( '<li><button class="monthsButton" data-value="'+_i+'"'+_addClass+'>'+'Feb'+'</button></li>' );
      } else if ( _i == 3) {
        document.write( '<li><button class="monthsButton" data-value="'+_i+'"'+_addClass+'>'+'Mar'+'</button></li>' );
      } else if ( _i == 4) {
        document.write( '<li><button class="monthsButton" data-value="'+_i+'"'+_addClass+'>'+'Apr'+'</button></li>' );
      } else if ( _i == 5) {
        document.write( '<li><button class="monthsButton" data-value="'+_i+'"'+_addClass+'>'+'May'+'</a></li>' );
      } else if ( _i == 6) {
        document.write( '<li><button class="monthsButton" data-value="'+_i+'"'+_addClass+'>'+'Jun'+'</a></li>' );
      } else if ( _i == 7) {
        document.write( '<li><button class="monthsButton" data-value="'+_i+'"'+_addClass+'>'+'Jul'+'</a></li>' );
      } else if ( _i == 8) {
        document.write( '<li><button class="monthsButton" data-value="'+_i+'"'+_addClass+'>'+'Aug'+'</a></li>' );
      } else if ( _i == 9) {
        document.write( '<li><button class="monthsButton" data-value="'+_i+'"'+_addClass+'>'+'Sep'+'</a></li>' );
      } else if ( _i == 10) {
        document.write( '<li><button class="monthsButton" data-value="'+_i+'"'+_addClass+'>'+'Oct'+'</a></li>' );
      } else if ( _i == 11) {
        document.write( '<li><button class="monthsButton" data-value="'+_i+'"'+_addClass+'>'+'Nov'+'</a></li>' );
      } else if ( _i == 12) {
        document.write( '<li><button class="monthsButton" data-value="'+_i+'"'+_addClass+'>'+'Dec'+'</a></li>' );
      } 
}