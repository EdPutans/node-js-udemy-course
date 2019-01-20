console.log('starting app.js...')

// const fs = require('fs')
// const os = require('os')

let title={
    describe: "Title of note",
    demand: true,
    alias: 't'
}

let body={
    describe: "Body of note",
    demand: true,
    alias: 'b'
}

const notes = require('./notes.js')
const yargs = require('yargs')
const argv = yargs
    .command('add',"Add a new note", { title, body })
    .command("read", "Read the note", { title })
    .command('remove', "Remove a note", { title })
    .command('list', "List all notes")
    .argv
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
// no interesting new info

// 3.16

const command = argv._[0]
switch(command){
    case "add":
        notes.addNote(argv.title, argv.body)
        break
    case "list":
        notes.getAll()
        break
    case "find":
        notes.getNote(argv.title)
        break
    case "remove":
        notes.removeNote(argv.title)
        break    
    default:
        console.log('Command not found')
        break
}
