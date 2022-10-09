const mock = require('./queryMocker');

async function createNote(query) {
    return mock.createNote(query)
        .then(note => {
            return Promise.resolve(note);
        })
        .catch(error => {
            console.log(error)
            return Promise.reject(error.message || error);
        })
}
exports.createNote = createNote;

async function updateNoteById(query) {
    return mock.updateNote(query)
        .then(note => {
            return Promise.resolve(note);
        })
        .catch(error => {
            console.log(error)
            return Promise.reject(error.message || error);
        })
}
exports.updateNoteById = updateNoteById;

