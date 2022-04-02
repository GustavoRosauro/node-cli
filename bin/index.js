#!/usr/bin/env node
const readline = require('readline');

let rw = readline.createInterface(
    process.stdin, process.stdout
);

rw.question('informe o nome ', (name)=>{
    console.log('O nome informado foi: ' +name);
});

