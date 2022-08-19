const sumAll = function(num1,num2) {
    let finalSum = 0;
    let highValue = Math.max(num1,num2);
    let lowValue = Math.min(num1,num2);

    if (typeof num1 === "string" || typeof num2 === "string" || num1 instanceof String || num2 instanceof String || isNaN(num1) || isNaN(num2)) {
        finalSum = "ERROR";
    } else {
        if(lowValue <0 || highValue <0) {
            finalSum = "ERROR";
        }else if (lowValue > 0 || highValue > 0){
            for (i = lowValue ; i <= highValue ; i++) {
                finalSum += i;
                console.log(finalSum);
            }
        }
    }

    console.log(highValue,lowValue);
    return finalSum;
};
    console.log(sumAll);
// Do not edit below this line
module.exports = sumAll;
