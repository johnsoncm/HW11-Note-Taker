//bring in utils and fs and unique id generator
// and readfileasync and writefileasync
const utils = require('util')
const fs = require('fs') 
const uuidv1 = require('uuidv1')
console.log("uuidv1" ,uuidv1())

const readFileAsync = utils.promisify(fs.readFile)
const writeFileAsync = utils.promisify(fs.writeFile)

// store note as variable in a class

const newID = uuidv1();

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
        // if statement if there's not text or title error
        if (text == null && title == null){
            return ("Error")

        }else{
            return writeFileAsync('db/db.json' , JSON.stringify(note))
        }
    };

    deleteNote(noteId){
        //read all the notes from the db.json file, and remove the notes
        //with the given id property, and then rewrite the notes to the db.json file
        //locate the note to be deleted using uuidv, which generates a random id
        if (newId === newId){
            deleteNote()
            
        }else{
            return writeFileAsync('db/db.json' , JSON.stringify(note))
        }
    }
}

module.exports = new Store();