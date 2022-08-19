const palindromes = function (string) {
    const regex = /[^A-Za-z0-9]/g;
    let stringWithoutPunctuation = string.toLowerCase().replace(regex,""); //remove punctuation and convert string to lower case
    let newString = "";
    let isPalindrome;

    for (let i = stringWithoutPunctuation.length - 1; i >= 0; i--) {
        newString += stringWithoutPunctuation[i];
    }
    if (stringWithoutPunctuation == newString){
        isPalindrome = true;
    } else {
        isPalindrome = false;
    }
    console.log(newString, isPalindrome);
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;


