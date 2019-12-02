const file = require('../lib/fileutils.js');
const fuelReducer = (accumulator,value) =>
{
    const numberValue = parseInt(value);
    let moduleFuel = Math.floor(numberValue/3) - 2;
    return accumulator+ moduleFuel;
}


const values = file.getlinesFromFile('day01.input.txt');
let answer = values.reduce(fuelReducer,0)
console.log(answer);

