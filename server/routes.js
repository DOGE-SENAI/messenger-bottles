const { Router } = require('express')

const router = Router()

const UserController = require('./src/controllers/UserController')

router.post('/user-create', UserController.createUser)
router.put('/user-update/:id', UserController.updateUser)
router.get('/user-list', UserController.listUser)

module.exports = router

