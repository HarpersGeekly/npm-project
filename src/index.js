//"require" is a part of the CommonJS project.
//not part of the JS language, but used heavily by the community (especially in server side JS)

const $ = require("jquery"); //require('module-name'); Loading jquery.min.js

//npm version:
//const data = require("./data"); //custom module we made, use ./ for directory, it reads data.js file. The same as this:
/*const data = {
someNumber: 42,
    whichSideOfTheForce: 'The Dark Side',
    arnie: 'Get to da choppa!',
};
*/

// "import" is a part of the es2015 specifications, ie. a part of the JS language.
//not yet implemented by any browsers or node
import data from "./data";

//npm version:
//const math = require("./math");
//es6 version:
import math from "./math";
console.log(math.add(50, 25));
console.log(math.subtract(50,25));
console.log(math.multiply(50,25));
console.log(math.divide(50,25));

//npm version:
const message = require("./say-hello");
// es6 version:
// import message from "./say-hello";
console.log(message());

const hello = () =>
    console.log("hello world from webpack");

hello();

console.log(data.whichSideOfTheForce); // console log the property value of the key whichSideOfTheForce of the data object

$("body")
    .html("<h1>Hello from jQuery</h1>")
    .css("background-color", "gray")
;