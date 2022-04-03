#!/usr/bin/env node
let index = process.argv.indexOf('--name');
let arg = '';
if (index > -1) {
    arg = process.argv[index + 1];
}

console.log('O nome informado foi: ' + arg);


