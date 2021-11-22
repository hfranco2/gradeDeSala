// Import database
const knex = require('./../db')

exports.agendamentoAll = async (req, res) => {
    // Get all books from database
    knex
      .select('*') // select all records
      .from('agendamentos') // from 'books' table
      .then(userData => {
        // Send books extracted from database in response
        res.json(userData)
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error retrieving books: ${err}` })
      })
  }

  exports.agendamentoCreate = async (req, res) => {
    // Add new book to database
    knex('agendamentos')
      .insert({ // insert new record, a book
        'nome': req.body.nome,
        'especialidade': req.body.especialidade,
        'horario': req.body.horario,
        'status': req.body.status
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Nome \'${req.body.nome}\'` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.nome} book: ${err}` })
      })
  }