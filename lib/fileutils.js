const DATA_FILE_PATH = '../data/'
exports.getlinesFromFile = function(filename) {
  //Get values from file
  var fs = require("fs");

  let datafile = fs.readFileSync(DATA_FILE_PATH + filename, "utf8");
  //Parse values into array of strings
  return datafile.split("\n");
};

exports.getSingleLineIntArayFromFile = function(filename) {
    //Get values from file
    var fs = require("fs");
  
    let datafile = fs.readFileSync(DATA_FILE_PATH + filename, "utf8");
    //Parse values into array of strings
    
    const dataArray = datafile.split(",");
    return dataArray.map((x) => parseInt(x));
  };
