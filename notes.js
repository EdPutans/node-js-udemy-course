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

const logNote = (note) => {
    console.log(`${note.title} - ${note.body}`)
}

const noNote = () => {
    console.log('No such note')
}




const addNote = (title, body) => {
    note = title && body?
    {title, body} 
    :
    console.log('Check fields are filled')

    let notes = fetchNotes() 
    !notes.find(n => n.title === title) && 
    notes.push(note) && 
    saveNotes(notes)? 
    console.log( `Created note: ${title} - ${body}` )
        : 
    console.log( 'Failed to create a note' )
}

const getAll = () => {
    console.log('Getting notes:')
    const notes = fetchNotes()
    notes.forEach(n=> console.log(n.title, n.body)) 
}



const getNote = (title) =>{
    console.log("Heres the note:")
    const notes = fetchNotes()
    let note = notes.find(n=> n.title == title)
    note? logNote(note) : noNote()
}

const removeNote = (title) => {
    const notes = fetchNotes()
    const filteredNotes = notes.filter(n=> n.title !== title)
    saveNotes(filteredNotes)
    
   notes.length === filteredNotes.length? noNote() : console.log('Removed note', title)
}

module.exports = { 
    addNote, 
    getAll,
    getNote,
    removeNote
 }