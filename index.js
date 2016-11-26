#!/usr/bin/env node
const E = require('3x3c');
const colors = require('colors');

var cmd = /^dar/.test(process.platform) ? 'du -ax * | sort -rn | head -10' : 'du -hsx * | sort -rh | head -10';
console.log(colors.rainbow('Bigger is better :))'));
E(cmd)
  .then((output) => {
    console.log(colors.green(output));
  })
  .catch((err) => {
    console.log(colors.red(err));
  })
