exports.up = function(knex, Promise) {
    return knex.schema.createTable("milestones", (table) => {
        table.string('Description');
        table.string('Date Achived: ');
    })
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('milestones');
};