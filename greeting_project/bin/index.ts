#!/usr/bin/env node

import {greeting} from '../lib/greet';
let s :string = greeting();
console.log(s);

let arg :string[] = process.argv.splice(2);
console.log(arg);