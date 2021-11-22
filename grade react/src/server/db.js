// Import path module
// import path from 'path'

// import knex from 'knex'
const path = require('path')

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, 'database/database.sqlite')

// Create connection to SQLite database
const Knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath, 
  },
  useNullAsDefault: true
})

// Create a table in the database called "books"
Knex.schema
  // Make sure no "books" table exists
  // before trying to create new
  .hasTable('agendamentos')
    .then((exists) => {
      if (!exists) {
        // If no "books" table exists
        // create new, with "id", "author", "title",
        // "pubDate" and "rating" columns
        // and use "id" as a primary identification
        // and increment "id" with every new record (book)
        return Knex.schema.createTable('agendamentos', (table)  => {
          table.increments('id').primary()
          table.string('nome')
          table.string('especialidade')
          table.string('horario')
          table.integer('status')
        })
        .then(() => {
          // Log success message
          console.log('Table \'Agendamentos\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      // Log success message
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    })

// Just for debugging purposes:
// Log all data in "books" table
Knex.select('*').from('agendamentos')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))

// Export the database
module.exports = Knex