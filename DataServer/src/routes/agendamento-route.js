// Import express
const express = require('express')

const agendamentosRoutes = require('../controllers/agendamento-controller.js')

// Create router
const router = express.Router()

// Add route for GET request to retrieve all book
// In server.js, books route is specified as '/books'
// this means that '/all' translates to '/books/all'
router.get('/all', agendamentosRoutes.agendamentoAll)

router.post('/create', agendamentosRoutes.agendamentoCreate)

router.delete('/clear', agendamentosRoutes.agendamentoClear)

router.put('/update', agendamentosRoutes.agendamentoUpdate)

router.get('/id', agendamentosRoutes.agendamentoById)


// Export router
module.exports = router