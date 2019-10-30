following:
https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e

in the terminal

npm init

chmod +x cli.js

npm link
MAC = sudo npm link
npm unlink
MAC = sudo npm unlink

in the package.json 

"bin": {
    "say-hello": "./cli.js"
  }

in the cli.js file

#!/usr/bin/env node
