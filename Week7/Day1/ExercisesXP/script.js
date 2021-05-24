const a = require ('./script2.js')
const users = require ('./data.js')

//users.users().then(res => console.log(res));
console.log(a)
console.log(a.id)
console.log(a.firstName)
console.log(a.getName())
const hi = a.getName()
console.log(hi)


// console.log('dirname:    '+ __dirname)
// console.log('filename:  '+ __filename)
// console.log(module)

////=====For bash
//clear - ti clear window
// node - activate nodejs
// fs - inside to file system
// http - list of method and status code
// npm i axios  - to download axios