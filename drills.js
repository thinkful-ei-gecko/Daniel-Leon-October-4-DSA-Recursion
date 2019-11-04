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

const split = function(str, separator) {
  let idx = str.indexOf(separator)
  if(idx === -1) {
    return [str];
  }

  return [str.slice(0, idx), ...split(str.slice(idx + 1, str.length), separator)];
};

console.log(split('test/test/test', '/'));



//drill 6: Fibbonaci
// const fib = function(n, count) {
//   if (count <= 2) {
//     return 1;
//   }


//   return fib(n - 1) + fib(n - 2);
// };

// console.log(fib(2));

//Drill 7: Factorial

// const factorial = function(n) {
//   if(n === 1) {
//     return n;
//   }

//   return  n * factorial(n-1);
// };

// console.log(factorial(3));

