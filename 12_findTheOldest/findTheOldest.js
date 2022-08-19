const findTheOldest = function (people) {
    function age(x) {
        return (x.yearOfDeath || new Date().getFullYear()) - x.yearOfBirth;
    }
    const oldest = people.sort((a, b) =>
      age(a) > age(b) ? -1 : 1
    );
    console.log(oldest);
    return oldest[0];
  };

  


// Do not edit below this line
module.exports = findTheOldest;
