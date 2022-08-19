const add = function(num1,num2) {
	let finalValue;
  finalValue = num1+num2;
  console.log(finalValue);
  return finalValue;
};

const subtract = function(num1,num2) {
	let finalValue;
  finalValue = num1-num2;
  console.log(finalValue);
  return finalValue;
};

const sum = function(number) {
  let finalValue = 0;
  
  number.forEach(number => {
   if (isNaN(number)) {
      number = 0;
      finalValue = finalValue + number;
      console.log(finalValue);
      return finalValue;
    } else {
      finalValue = finalValue + number;
      console.log(finalValue);
      return finalValue;
    }
  });
  return finalValue;
};

const multiply = function(number) {
  let finalValue = 1;
  
  number.forEach(number => {
   if (isNaN(number)) {
      number = 0;
      finalValue = finalValue * number;
      console.log(finalValue);
    } else {
      finalValue = finalValue * number;
      console.log(finalValue);
    }
  });
  return finalValue;
};

const power = function(num1,num2) {
	let finalValue;
  finalValue = Math.pow(num1,num2);
  console.log(finalValue);
  return finalValue;
};

const factorial = function(number) {
	let finalValue = 1;
  if (number == 0){
    finalValue = 1;
  } else {
    for(i=1; i<=number; i++){
      finalValue = finalValue*i;
    }
    console.log(finalValue);
  }
  
  return finalValue;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
