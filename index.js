#!/usr/bin/env node
const E = require('3x3c');
const colors = require('colors');

console.log("Bigger is better :))");
E(`du -hsx * | sort -rh | head -10`)
  .then((output) => {
    console.log(colors.green(output));
  })
  .catch((err) => {
    console.log(colors.red(err));
  })
