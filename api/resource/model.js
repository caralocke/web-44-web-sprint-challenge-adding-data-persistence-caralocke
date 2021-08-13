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
    const [resource_id] = await db('resources').insert(resource)
    return resource_id
}

module.exports = {
    findAll,
    findById,
    add
}