//bring in utils and fs and unique id generator
// and readfileasync and writefileasync
const utils = require('util')
const fs = require('fs') 

// Universally Unique Identifiers 
const uuidv1 = require('uuidv1')
// everytime you see new note this gets applied^^
console.log("uuidv1" ,uuidv1())

const readFileAsync = utils.promisify(fs.readFile)
const writeFileAsync = utils.promisify(fs.writeFile)



const newID = uuidv1();


// function createdUniqueId () {
//     [id: newID,
//     ]
// };


// stores note as variable in a class

class Store {
    // all functions
    read(){
        return readFileAsync('db/db.json' , 'utf8')
    }
    write(note){
        return writeFileAsync('db/db.json' , JSON.stringify(note))
    }

    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes;
            try { 
                parsedNotes = [].concat(JSON.parse(notes))
            } catch (error) {
                parsedNotes = []
            }
            return parsedNotes
        })
    }
    postNote(note){
        const {title, text} = note

        if (!title || !text) {
            throw new Error ("Error!!")
        }
        const newNote = {title, text, id:uuidv1()}
        return this.getNotes()
        .then((notes) => [...notes,newNote])
        .then((updatedNotes) => this.write(updatedNotes))
        .then(() => newNote)

    };

    deleteNote(noteId){

      return this.getNotes()
      .then((notes) => notes.filter((note) => note.id !== noteId)) 
      .then((filteredNotes) => this.write(filteredNotes))

        //read all the notes from the db.json file, and remove the notes
        //with the given id property
     

    }
}

module.exports = new Store();