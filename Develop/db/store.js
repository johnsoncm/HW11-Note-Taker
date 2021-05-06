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
        return writeFileAsync('db/db.json' , JSON.stringify())
    }

    getNotes(note) {
        // return writeFileAsync('db/db.json' , JSON.stringify())
        return writeFileAsync('db/db.json' , JSON.stringify())
    }
    postNote(note){
// read the file using the fs readfile function
// this will produce array of notes in db
        fs.readFile('db/db.json')

// push new note onto the notes array notes.push(note)
// json.stringify(notes)
       return notes.push(note).JSON.stringify(notes) 
        // }else{
            // return writeFileAsync('db/db.json' , JSON.stringify(note))
        // }
    };

    deleteNote(noteId){

        fs.read('db/db.json')

        //read all the notes from the db.json file, and remove the notes
        //with the given id property
     
        if (newId === noteId){
            deleteNote()
            
        }else{
            //then rewrite the notes to the db.json file
            return writeFileAsync('db/db.json' , JSON.stringify(note))
        }
    }
}

module.exports = new Store();