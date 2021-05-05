const router = require('express').Router();
const store = require('../db/store.js');

// 3 router methods: get, post, delete

router.get('/api/notes' , (req, res) =>{
    store
    .getNotes()
    .then((note)=>{
        return res.json(note)
    }).catch((err) =>{
        res.status(500).json(err)
    });
});

router.post('/api/notes' , (req, res) => {
    store
    .saveNote(req.body)
    .then((note)=> res.json(note))
    .catch((err) => {
        res.status(500).json(err)
    });  
});

router.delete('/api/notes/:id', (req, res) => {
    store
    .deleteNote(req.params.id)
    .then(() => res.json({ok:true}))
    .catch((err) => {
        res.status(500).json(err)
    });  
});

module.exports = router;