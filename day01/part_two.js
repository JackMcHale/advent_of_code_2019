const file = require("../lib/fileutils.js");
const fuelReducer = (accumulator, value) => {
  const numberValue = parseInt(value);
  let moduleFuel = 0;
  let fuel = numberValue;
  while(fuel > 0)
  {
    fuel = Math.floor(fuel / 3) - 2;
    if (fuel > 0) {
      moduleFuel += fuel;
    }
  }
  return accumulator + moduleFuel;
};

const values = file.getlinesFromFile("day01.input.txt");
let answer = values.reduce(fuelReducer, 0);
console.log(answer);
