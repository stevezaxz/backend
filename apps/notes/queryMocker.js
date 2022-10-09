const mockData = require("./../../mockData/jobs.json");
const alasql = require('alasql');

async function createNote(data) {
    return new Promise(async (resolve, reject) => {
        try {
            return resolve(data);
        } catch (error) {
            return reject(error)
        }
    });
}

exports.createNote = createNote;


async function updateNote(data) {
    return new Promise(async (resolve, reject) => {
        try {
            return resolve(data);
        } catch (error) {
            return reject(error)
        }
    });
}

exports.updateNote = updateNote;