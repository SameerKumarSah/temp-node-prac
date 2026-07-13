//CommonJs, every file is module (by default)
//Module - Encapsulated Code (only share minimum)

const name = require('./3.2-module');
console.log(name);

const sayhi = require('./3.3-mosdule');
const helo = require('./3.4-alternativesyntax');
console.log(helo);
require('./4-mindgrenade');



sayhi('susan');
sayhi(name.john);
sayhi(name.peter);