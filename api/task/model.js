const db = require('../../data/dbConfig')

function findAll() {
    return db('tasks')
    .select('tasks.*', 'projects.project_name', 'projects.project_description', 'projects.project_id')
    .join('projects', 'tasks.project_id', 'projects.project_id')
  ;
}

async function findById(task_id) {
    return await db('tasks')
    .where('task_id', task_id)
    .first();
}

async function add(task) {
    const [task_id] = await db('tasks').insert(task)
    return task_id
}

module.exports = {
    findAll,
    findById,
    add
}
