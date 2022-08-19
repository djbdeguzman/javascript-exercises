const repeatString = function(str,number) {
    let text;
    if (number > 0) {
        text= str.repeat(number);
    } else if (number == 0){
        text = "";
    } else if (number < 0){
        text = "ERROR";
    }
    console.log(text);
    return text;
};

// Do not edit below this line
module.exports = repeatString;
