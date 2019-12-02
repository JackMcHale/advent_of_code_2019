const file = require('../lib/fileutils.js');

let inputArray = file.getSingleLineIntArayFromFile('day02.input.txt');
console.log(inputArray.length);
/*
To do this, before running the program, replace position 1 with the value 
12 and replace position 2 with the value 2. What value is left at position 
0 after the program halts?
*/
//Replace the values at 1 and 2
//Step through the array 4 at a time
//Operate on line
//If 1 add
//If 2 multiple
//If 99 stop

//Return element 0