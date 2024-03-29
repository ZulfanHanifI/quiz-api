const express = require("express")
const router = express.Router()

const userController = require('../controllers/users')

router.get('/users', userController.index)

router.get('/user/:id', userController.show)
  
router.post('/user', userController.store)

router.put('/user/:id', userController.update)

router.delete('/user/:id', userController.delete)

module.exports = router