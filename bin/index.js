#!/usr/bin/env node
const { exec } = require('child_process');
let index = process.argv.indexOf('--name');
let arg = '';
if (index > -1) {
    arg = process.argv[index + 1];
    console.log(arg)
    if (arg.toLowerCase() == 'desligar')
        exec('shutdown /s');
    else if (arg.toLowerCase() == 'version') {
        console.log('version 1.0.1');
    }
}

console.log('O nome informado foi: ' + arg);


