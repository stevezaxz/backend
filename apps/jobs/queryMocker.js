const mockData = require("./../../mockData/jobs.json");
const alasql = require('alasql');

async function getAll(data) {
    return new Promise(async (resolve, reject) => {
        try {
            const { sort, filter } = data;
            const query = sort ? `order by id ${sort}` : '';
            const filter_query = filter ? `WHERE status = '${filter}'`: '';

            const result = alasql(`SELECT * FROM ? ${filter_query} ${query}`, [mockData])
            return resolve(result);
        } catch (error) {
            return reject(error)
        }
    });
}

exports.getAll = getAll;

async function getById(data) {
    return new Promise(async (resolve, reject) => {
        const { id } = data;
        try {
            const data = alasql(`SELECT * FROM ? WHERE id = '${id}'`, [mockData])
            return resolve(data);
        } catch (error) {
            return reject(error)
        }
    });
}

exports.getById = getById;


// I just selected the data from the mockdata.json and returned it since there is no actual database for this instance.
async function updateById(data) {
    return new Promise(async (resolve, reject) => {
        try {
            const { id } = data;
            const result = alasql(`SELECT * FROM ? WHERE id = '${id}'`, [mockData])
            return resolve(result);
        } catch (error) {
            return reject(error)
        }
    });
}

exports.updateById = updateById;


