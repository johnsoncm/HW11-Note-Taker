const path = require('path');
const router = require('express').Router();

// When button is clicked this displays the notes.html page
router.get('/notes' , (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})
router.get('/' , (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

//gets all files in notes
router.get('*' , (req, res) =>{
    res.sendFile(path.join(__dirname , '../public/index.html'))
})

module.exports = router;