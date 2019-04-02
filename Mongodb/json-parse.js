// after GET at Mongo, output will be an array of JSON-elements. Needs to be stored in variable. 
// fs.readfile is only necessary if output is stored in file.

var fs = require('fs');

fs.readFile('output.json', function (err, data) {
    var jsonData = data;                            // store output MongoDB in variable jsonData
    var jsonParsed = JSON.parse(jsonData);          // parse jsonData

    console.log(jsonParsed.length);                 // give length of parsed jsonData
    }
);