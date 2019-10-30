#!/usr/bin/env node

// Similar as other shell script, we want to make our JavaScript file executable by the locally installed node program. We do that adding a shebang character sequence at the very top of our JavaScript file that look as follow:

const args = process.argv.slice(2);
// args represents everything be can see without the two first arguments from the process

console.log(`What we have done is pretty simple, sliced the two first arguments from the process. ${args}`);
