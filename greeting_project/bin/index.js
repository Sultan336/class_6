#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var greet_1 = require("../lib/greet");
var s = greet_1.greeting();
console.log(s);
var arg = process.argv.splice(2);
console.log(arg);
