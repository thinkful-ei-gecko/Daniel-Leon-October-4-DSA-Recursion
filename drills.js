// //Drill 1
// function sheepCall(sheep) {
//   if (sheep === 0) {
//     return 'All sheep jumped over the fence';
//   }
//   return `${sheep}: Another sheep jumps over the fence` + sheepCall(sheep-1);
// }
// console.log(sheepCall(3));


// Drill 2: PowerCalculator

const powerCalculator = function(base, exponent) {
  if(exponent === 1) {
    return base;
  }

  if(exponent === 0) {
    return 1;
  }
  
  if (exponent < 0) {
    return 'exponent should be >= 0';
  }

  return (base) * powerCalculator(base, (exponent -1));
};

console.log(powerCalculator(10, 2));
console.log(powerCalculator(5, 5));