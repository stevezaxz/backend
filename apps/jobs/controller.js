let service = require('./service');


function getJobs() {
    return function (req, res, next) {
        let query = {
            "sort": req.query.sort,
            "filter": req.query.filter,
        };

        service.getJobs(query)
            .then(jobs => {
                res.status(200).json({
                    status: true,
                    message: "Success",
                    data: jobs
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

exports.getJobs = getJobs;

function getJobById() {
    return function (req, res, next) {
        const id = req.params.id;
        let query = {
            id
        };
        service.getJobById(query)
            .then(job => {
                res.status(200).json({
                    status: true,
                    message: "Success",
                    data: job
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

exports.getJobById = getJobById;

function updateJobById() {
    return function (req, res, next) {
        const id = req.params.id;
        let query = {
            id,
            "status": req.body.status
        };
        service.updateJobById(query)
            .then(job => {
                res.status(200).json({
                    status: true,
                    message: "Success",
                    data: job
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

exports.updateJobById = updateJobById;