const pg = require("pg");
const settings = require("./settings"); // settings.json
const people = process.argv.slice(2);

const client = new pg.Client({
    user: settings.user,
    password: settings.password,
    database: settings.database,
    host: settings.hostname,
    port: settings.port,
    ssl: settings.ssl
});

client.connect((err) => {
    if (err) {
        return console.error("Connection Error", err);
    } else {}
    client.query("SELECT * from famous_people WHERE last_name =  $1::text", people, (err, result) => {
        if (err) {
            return console.error("error running query", err);
        }
        getName(result);
        client.end();
    });
});

function getName(result) {

    console.log('Found ' + result.rows.length + ' person(s) by the name ' + "'" + people + "': ");
    for (let person in result.rows) {
        console.log('-' + result.rows[person].id + ': ' + result.rows[person].first_name + ' ' + result.rows[person].last_name + ', ' + result.rows[person].birthdate.toISOString().substr(0, 10));
    }
}