
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments().primary();
        table.string('name', 255).notNullable();
        table.string('email', 255).notNullable();
        table.string('qualification', 255).notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
