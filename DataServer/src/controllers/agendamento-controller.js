// Import database
const knex = require('../db')

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

  exports.agendamentoClear = async (req, res) => {
    // Find specific book in the database and remove it
    knex('agendamentos')
      .where('id', req.body.id) // find correct record based on id
      .update({
        'nome': '',
        'especialidade': '',
        'horario': '',
        'status': 1
      }) 
      .then(() => {
        // Send a success message in response
        res.json({ message: `Agendamento ${req.body.id} clean.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error cleaning ${req.body.id} Agendamento: ${err}` })
      })
  }

  exports.agendamentoUpdate = async (req, res) => {
    // Add new book to database
    knex('agendamentos')
      .where('id', req.body.id)
      .select('*')
      .then(data => {
        let nome = (req.body.nome == null || req.body.nome == undefined) ? data.nome : req.body.nome;
        let especialidade = (req.body.especialidade == null || req.body.especialidade == undefined) ? data.especialidade : req.body.especialidade;
        let horario = (req.body.horario == null || req.body.horario == undefined) ? data.horario : req.body.horario;
        let status = (req.body.status == null || req.body.status == undefined) ? data.status : req.body.status;
        knex('agendamentos')
          .where('id', req.body.id)
          .update({
            'nome': nome,
            'especialidade': especialidade,
            'horario': horario,
            'status': status
          })
          .th 
        res.json({ message: `Nome \'${req.body.nome}\'` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.nome} book: ${err}` })
      })
  }

  exports.agendamentoById = async (req, res) => {
    // Get all books from database
    knex
      .select('*') // select all records
      .from('agendamentos') // from 'books' table
      .where('id', req.body.id)
      .then(userData => {
        // Send books extracted from database in response
        res.json(userData)
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error retrieving books: ${err}` })
      })
  }