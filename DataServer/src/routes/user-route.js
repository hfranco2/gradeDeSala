// Import express
const express = require('express')

const userRoutes = require('../controllers/user-controller.js')

// Create router
const router = express.Router()

// Add route for GET request to retrieve all book
// In server.js, books route is specified as '/books'
// this means that '/all' translates to '/books/all'
router.get('/all', userRoutes.userAll)

router.post('/create', userRoutes.userCreate)

router.delete('/delete', userRoutes.userDelete)

router.get('/usuario', userRoutes.userByUsuario)

router.get('/login', userRoutes.userLogin)

router.put('/changepassword', userRoutes.userChangePassword)

router.put('/resetpassword', userRoutes.userResetPassword)


// Export router
module.exports = router