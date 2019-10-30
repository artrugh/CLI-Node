following:
https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e

npm init
chmod +x cli.js

package.json   

"bin": {
    "say-hello": "./cli.js"
  }

npm link
MAC = sudo npm link
npm unlink
MAC = sudo npm unlink