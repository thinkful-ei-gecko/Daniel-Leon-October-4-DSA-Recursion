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

// const split = function(str, separator) {
//   let idx = str.indexOf(separator)
//   if(idx === -1) {
//     return [str];
//   }

//   return [str.slice(0, idx), ...split(str.slice(idx + 1, str.length), separator)];
// };

// console.log(split('test/test/test', '/'));



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


//Drill 8

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

//returns a string with directions: RRLLDLRL;
function solveSmallMaze(maze, currentPosition = [0,0]) {
  let length = maze[0].length;
  let height = maze.length;
  // let currentMazeLetter = maze[currentPosition[1]][0];


  //base case
  console.log(currentPosition);
  if (currentPosition[0] === length-1 && currentPosition[1] === height-1) {
    return '';
  }

  if (currentPosition[0] >= length-1 || maze[currentPosition[1]][currentPosition[0]+1] === '*') { //if we reach a blocker on the right side, go down
    let currentStep = 'D';
    let newPosition = [currentPosition[0],currentPosition[1]+1];
    return currentStep + solveSmallMaze(maze, newPosition)
  }
  else { // go right
    let currentStep = 'R';
    let newPosition = [currentPosition[0]+1,currentPosition[1]];
    return currentStep + solveSmallMaze(maze, newPosition)
  }
}

console.log(solveSmallMaze(maze));