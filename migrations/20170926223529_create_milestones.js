exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('famous_people', function(table) {
            table.string('Description: ');
            table.string('Date achieved: ');
            table.timestamps();
        })
    ])
};
exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('famous_people');
    ])
};