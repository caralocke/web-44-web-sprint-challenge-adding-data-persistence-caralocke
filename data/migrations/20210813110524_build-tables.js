
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', (table) => {
      table.increments('project_id')
      table.string('project_name', 128).notNullable()
      table.string('project_description', 256)
      table.boolean('project_completed').defaultTo(false)
  })
  .createTable('resources', (table) => {
      table.increments('resource_id')
      table.string('resource_name').notNullable().unique()
      table.string('resource_description', 256)
  })
  .createTable('tasks', (table) => {
      table.increments('task_id')
      table.string('task_description', 256).notNullable()
      table.string('task_notes')
      table.boolean('task_completed').defaultTo(false)
      table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
  })
  .createTable('project_resources', (table) => {
      table.increments('project_resources_id')
      table.integer('project_id')   
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      table.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resorce_id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
