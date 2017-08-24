#! /usr/bin/env node

var program = require('commander');

program
  .version('0.0.1')
  .option('-e, --endpoint', 'EventHub endpoint name or url')
  .option('-n, --name', 'EventHub name')
  .option('-s, --sas', 'Shared Access Signiture name')
  .option('-k, --key', 'Share Access Signiture key')
  .parse(process.argv)

console.log('Hello, world!');