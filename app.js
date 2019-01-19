console.log('starting app.js...')

// const fs = require('fs')
// const os = require('os')
const notes = require('./notes.js')
const _ = require('lodash')

// // 3.9
// // fs.appendFileSync('yo.txt', `Henlo, I logged in as ${os.userInfo.username}`)

// // 3.10
// // let result = notes.add(1, 6)
// // console.log(result)

// // 3.12
// console.log(_.isString("YEEET"))
// console.log(_.isString(true))
// console.log(`Uniques: ${_.uniq([1,2,2,3,4])}`)

// 3.13
// console.log(process.argv)
let command = process.argv[2]
let note = process.argv[3]
console.log('Command:', command)

switch(command){
    case "add":
        console.log("Adding note:", note)
        break
    case "list":
        console.log('Listing notes')
        break
    default:
        console.log('Command not found')
        break
}
