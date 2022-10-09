const express = require('express');
const router = express.Router();
const controller = require('./controller');



function routes(){
    router.get('/', controller.getJobs());
    router.get('/:id', controller.getJobById());
    router.put('/:id', controller.updateJobById());
    return router;
}

  
module.exports = routes;