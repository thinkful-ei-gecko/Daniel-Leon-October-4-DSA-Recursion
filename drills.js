// //Drill 1
// function sheepCall(sheep) {
//   if (sheep === 0) {
//     return 'All sheep jumped over the fence';
//   }
//   return `${sheep}: Another sheep jumps over the fence` + sheepCall(sheep-1);
// }
// console.log(sheepCall(3));


// // Drill 2: PowerCalculator

// const powerCalculator = function(base, exponent) {
//   if(exponent === 1) {
//     return base;
//   }

//   if(exponent === 0) {
//     return 1;
//   }
  
//   if (exponent < 0) {
//     return 'exponent should be >= 0';
//   }

//   return (base) * powerCalculator(base, (exponent -1));
// };

// console.log(powerCalculator(10, 2));
// console.log(powerCalculator(5, 5));



//Drill 3

// function reverser(line) {
//   if (line.length === 0) {
//     return '';
//   }
//   return line.charAt(line.length-1) + reverser(line.slice(0,line.length-1));
// }

// console.log(reverser('daniel nichols'));

// //Drill 4: Triangle Number

// const triNum = function(n) {
//   if(n === 1) {
//     return n;
//   }

//   return n + triNum(n-1);
// }

// console.log(triNum(5));


//Drill 5 - String Splitter

// function split(string, separator) {
//   if (string.length === 0) {
//     return '';
//   }
//   if (string[0] !== separator) {
//     let item = [string[0]];
//     return [item + split(string.slice(1), separator)];
//   }
//   else {
//     return [split(string.slice(1), separator)];
//   }
// }

const strSplit = function(str) { 
  //base Case 
  if(str === "") { 
    return str; 
  }

  if (str[0] !== '/') { 
    return [str[0] + strSplit(str.slice(1))];
  } 
  else { 
    return strSplit(str.slice(1)) ;
  } 
};

console.log('02/24/2020'.split('/'));
