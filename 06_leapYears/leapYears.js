const leapYears = function(year) {
    let checkLeapYears;
    if (year % 100 == 0 ) {
        if (year % 400 == 0 ) {
            checkLeapYears = true ;
        } else {
            checkLeapYears = false;
        }
    } else if (year%4 == 0) {
        checkLeapYears = true;
    } else {
        checkLeapYears = false;
    }
    return checkLeapYears;
}


console.log (leapYears);


// Do not edit below this line
module.exports = leapYears;
