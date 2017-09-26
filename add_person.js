const settings = require("./settings"); // settings.json
var knex = require('knex')({
    client: 'pg',
    connection: {
        user: 'development',
        password: 'development'

    }
});
//Creates a table with given parameters from command line. Returns error if input is empty
function createTable() {
    if (!process.argv[2] || !process.argv[2] || !process.argv[2]) {
        console.log("Please input values to insert in the form of: name, last name, birthdate.");
        knex.destroy();
    } else {
        var insert1 = {
            first_name: process.argv[2],
            last_name: process.argv[3],
            birthdate: process.argv[4]
        }

        knex.insert(insert1).into('famous_people').then(function(id) {
            getTable();
            knex.destroy();

        });
    }
}
createTable();

//Selects the created table, in this case 'famous_people' and returns its contents
function getTable() {
    knex.select('*').from('famous_people')
        .asCallback(function(err, rows) {
            if (err) return console.error(err);
            console.log(rows);
        });
}


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