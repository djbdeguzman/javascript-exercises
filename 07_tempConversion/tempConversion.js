const ftoc = function(temp) {
  let tempCel;
  let tempCelRound;
  tempCel = (temp - 32 )*.5556;
  if (tempCel == 0) {
    console.log(tempCel);
    return tempCel;
  } else {
    tempCelRound = Number(tempCel.toFixed(1));
    console.log(tempCelRound);
    return tempCelRound;
  }
};

const ctof = function(temp) {
  let tempFar;
  let tempFarRound;
  tempFar = (temp * 1.8 )+32;
  if (tempFar % 1 == 0) {
    console.log(tempFar);
    return tempFar;
  } else {
    tempFarRound = Number(tempFar.toFixed(1));
    console.log(tempFarRound);
    return tempFarRound;
  }
  
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
