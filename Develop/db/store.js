//bring in utils and fs and unique id generator
// and readfileasync and writefileasync
const utils = require('utils')
const fs = require('fs') 
const uuidv1 = require('uuid/v1')

const readFileAsync = utils.promisify(fs.readFile)
const writeFileAsync = utils.promisify(fs.writeFile)

// store note as variable in a class

class Store {
    // all functions
    read(){
        return readFileAsync('db/db.json' , 'utf8')
    }
    write(note){
        return writeFileAsync('db/db.json' , JSON.stringify(note))
    }

    getNotes() {

    }
    postNote(note){
        // if statement if there's not text or title error
    }
    deleteNote(){
        //uuidv

    }
}

module.exports = new Store();