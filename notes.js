console.log('Starting notes.js')

const fs = require('fs')

// module.exports.addNote = () => {
//     console.log('addNote')
//     return 'newNote'
// }

// module.exports.add =(a,b) => {
//  return a + b
// }

let fetchNotes = ( ) =>{
    try {
        let notesString = fs.readFileSync('./notes.json')
        return JSON.parse(notesString)
    } catch(e) { 
        return [] 
    }
}

let saveNotes = (notes) => {
    fs.writeFileSync('./notes.json', JSON.stringify(notes))
    return notes
}

const addNote = (title, body) => {
    note = title && body?
    {
        title, body
    } 
    :
    console.log('missing field')

    let notes = fetchNotes() 
    return !notes.find(n => n.title === title) && 
    notes.push(note) && 
    saveNotes(notes)
}


const getAll = () => {
    console.log('Getting notes')
    const notes = JSON.parse(fs.readFileSync('./notes.json'))
    notes.forEach(n=> console.log(n.title, n.body))
    
}

const getNote = (title) =>{
    console.log("Heres the note:")
    fs.readFileSync()
}

const removeNote = (title) => {
    console.log("Removing", title)
}


module.exports = { 
    addNote, 
    getAll,
    getNote,
    removeNote
 }