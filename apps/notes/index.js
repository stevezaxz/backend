const express = require('express');
const router = express.Router();
const controller = require('./controller');



function routes(){
    router.post('/', controller.createNote());
    router.put('/:id', controller.updateNoteById());
    return router;
}

  
module.exports = routes;