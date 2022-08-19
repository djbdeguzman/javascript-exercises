const caesar = function(str, amount) {
    let result = "";
      if (amount == undefined || amount == isNaN(amount)) {
    amount = 1;
    } else if (amount < 0) {
        amount = 26 + (amount % 26);
    }
  // loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      let newChar = str[i];
      if (newChar.match(/[a-z]/i)) {
        let code = str.charCodeAt(i);
        console.log(code);
  // get unicode values here https://www.ssec.wisc.edu/~tomw/java/unicode.html
        if (code >= 65 && code <= 90) {
          newChar = String.fromCharCode(((code - 65 + amount) % 26) + 65);
        }
        else if (code >= 97 && code <= 122) {
          newChar = String.fromCharCode(((code - 97 + amount) % 26) + 97);
        }
      }
      result += newChar;
      console.log(result);
    }
  
    // All done!
    return result;
    };
  
  // Do not edit below this line
  module.exports = caesar;
  