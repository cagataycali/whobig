#!/usr/bin/env node
const E = require('3x3c');
const colors = require('colors');

console.log("Bigger is better :))");
E(`du -hsx * | sort -rh | head -10`)
  .then((output) => {
    colors.green(output)
  })
  .catch((err) => {
    colors.red(err)
  })
