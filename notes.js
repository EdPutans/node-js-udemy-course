console.log('Starting notes.js')

// module.exports.addNote = () => {
//     console.log('addNote')
//     return 'newNote'
// }

// module.exports.add =(a,b) => {
//  return a + b
// }

const addNote = (title,body ) => {
    console.log('Adding note', title,body)
}

const getAll = () => {
    console.log('Getting notes')
}

const getNote = (title) =>{
    console.log("Note:", title)
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