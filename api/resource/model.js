const db = require('../../data/dbConfig')

function findAll() {
    return db('resources')
}

async function findById(resource_id) {
    return await db('resources')
    .where('resource_id', resource_id)
    .first();
}

async function add(resource) {
    return await db('resources').insert(resource)
}

module.exports = {
    findAll,
    findById,
    add
}