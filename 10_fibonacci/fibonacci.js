
const fibonacci = function(number) {
    //Fibonacci Series 1
    let found;
    if (number <0) {
        found ="OOPS";
    } else {
        let fibS1 = [1, 1];
        for(var i=2; i<number; i++) {
            fibS1[i] = fibS1[i-2] + fibS1[i-1];
        }
        let fibSeq = fibS1; // get Fib array
        console.log("Fibonacci Sequence Series 1: "+fibSeq);
        found = fibSeq[number-1]; // -1 because array counting starts at 0. i.e returns the 4th member of the series: 3  (1, 1, 2, 3) [0,1,2,3] ... 4th number is 3
        console.log("found: "+found);
    }
    return found;
};



// Do not edit below this line
module.exports = fibonacci;



//11