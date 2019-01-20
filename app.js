console.log('starting app.js...')

// const fs = require('fs')
// const os = require('os')
const notes = require('./notes.js')
const yargs = require('yargs')
const argv = yargs.argv
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

// 3.14
// let command = process.argv[2]
// let note = process.argv[3]
// // console.log('Command:', command)
// // console.log('process argv: ', process.argv)
// // console.log('Yargs', argv)

// 3.15

command = argv._[0]

switch(command){
    case "add":
        console.log("Adding note:", note)
        notes.addNote(argv.title, argv.body)
        break
    case "list":
        notes.getAll()
        break
    default:
        console.log('Command not found')
        break
}
