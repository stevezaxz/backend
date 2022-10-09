const mock = require('./queryMocker');

async function getJobs(query) {
    return mock.getAll(query)
        .then(jobs => {
            return Promise.resolve(jobs);
        })
        .catch(error => {
            console.log(error)
            return Promise.reject(error.message || error);
        })
}
exports.getJobs = getJobs;

async function getJobById(query) {
    return mock.getById(query)
        .then(jobs => {
            return Promise.resolve(jobs);
        })
        .catch(error => {
            console.log(error)
            return Promise.reject(error.message || error);
        })
}
exports.getJobById = getJobById;

async function updateJobById(query) {
    return mock.updateById(query)
        .then(jobs => {
            return Promise.resolve(jobs);
        })
        .catch(error => {
            console.log(error)
            return Promise.reject(error.message || error);
        })
}
exports.updateJobById = updateJobById;