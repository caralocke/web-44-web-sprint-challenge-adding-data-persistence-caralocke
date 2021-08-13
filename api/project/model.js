const db = require('../../data/dbConfig')

function findAll() {
  return db('projects')
}
async function findById(project_id) {
    return await db('projects')
    .where('project_id', project_id)
    .first();
}

const add = async (project) => {
    const [project_id] = await db('projects').insert(project);
    return await db('projects').where('project_id', project_id).first();
  };

module.exports = {
    findAll,
    findById,
    add
}