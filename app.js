console.log('starting app.js...')

const fs = require('fs')
const os = require('os')
const notes = require('./notes.js')

fs.appendFileSync('yo.txt', `Henlo, I logged in as ${os.userInfo.username}`)