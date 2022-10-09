let service = require('./service');


function createNote() {
    return function (req, res, next) {
        let data = {
            "job_id": req.body.job_id,
            "title": req.body.title,
            "body": req.body.description
        };

        service.createNote(data)
            .then(note => {
                res.status(200).json({
                    status: true,
                    message: "Success",
                    data: note
                });
            })
            .catch(err => {
                console.log(err)
                res.status(400).json({
                    status: false,
                    message: err
                });

            })
    }
}

exports.createNote = createNote;

function updateNoteById() {
    return function (req, res, next) {
        let data = {
            "job_id": req.body.job_id,
            "title": req.body.title,
            "body": req.body.description
        };

        service.updateNoteById(data)
            .then(note => {
                res.status(200).json({
                    status: true,
                    message: "Success",
                    data: note
                });
            })
            .catch(err => {
                console.log(err)
                res.status(400).json({
                    status: false,
                    message: err
                });

            })
    }
}

exports.updateNoteById = updateNoteById;

