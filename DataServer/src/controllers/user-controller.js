// Import database
const knex = require('../db')
const guid = require('uuid')

exports.userAll = async (req, res) => {
    // Get all books from database
    knex
      .select('*') // select all records
      .from('users') // from 'books' table
      .then(userData => {
        // Send books extracted from database in response
        res.json(userData)
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error retrieving books: ${err}` })
      })
  }

  exports.userCreate = async (req, res) => {
    // Add new book to database
    knex('users')
      .insert({ // insert new record, a book
        'usuario': req.body.usuario,
        'senha': req.body.senha
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Nome \'${req.body.usuario}\'` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.usuario} book: ${err}` })
      })
  }

  exports.userDelete = async (req, res) => {
    // Find specific book in the database and remove it
    knex('users')
      .where('id', req.body.id) // find correct record based on id
      .del() 
      .then(() => {
        // Send a success message in response
        res.json({ message: `users ${req.body.id} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.id} users: ${err}` })
      })
  }

  exports.userByUsuario = async (req, res) => {
    // Get all books from database
    knex
      .select('*') // select all records
      .from('users') // from 'books' table
      .where('usuario', req.body.usuario)
      .then(userData => {
        // Send books extracted from database in response
        res.json(userData)
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error retrieving books: ${err}` })
      })
  }

  exports.userLogin = async (req, res) => {
    // Get all books from database
    knex
      .select('*') // select all records
      .from('users') // from 'books' table
      .where({
        'usuario': req.body.usuario,
        'senha' : req.body.senha
      })
      .then(userData => {
        // Send books extracted from database in response
        res.json({
          statuscode: 1,
          message: "Usuario logado com sucesso",
          token: guid.v4().toString()
        })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ statuscode: 0, message: `There was an error retrieving books: ${err}` })
      })
  }