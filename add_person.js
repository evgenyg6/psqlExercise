const settings = require("./settings"); // settings.json
const people = process.argv.slice(2);
var knex = require('knex')({
    client: 'pg',
    connection: {
        user: 'development',
        password: 'development'

    }
});

knex.select('*').from('famous_people')
    .asCallback(function(err, rows) {
        if (err) return console.error(err);
        console.log(rows);
    });


/*client.clientonnect((err) => {
    if (err) {
        return console.error("Connection Error", err);
    }
    readName();
});*/
/*//Function to connect to database and find query
function readName(result) {
    client.query("SELECT * from famous_people WHERE last_name =  $1::text", people, (err, result) => {
        if (err) {
            return console.error("error running query", err);
        }
        printName(result);
        client.end();
    });
}
//Function to print input name from database
function printName(result) {
    console.log('Found ' + result.rows.length + ' person(s) by the name ' + "'" + people + "': ");
    for (let person in result.rows) {
        console.log('-' + (parseInt(person) + 1) + ': ' + result.rows[person].first_name + ' ' + result.rows[person].last_name + ', ' + result.rows[person].birthdate.toISOString().substr(0, 10));
    }
}*/