const { Router } = require('express')

const router = Router()

const UserController = require('./src/controllers/UserController')
const MessageController = require('./src/controllers/MessageController')

router.post('/user-create', UserController.createUser)
router.put('/user-update/:id', UserController.updateUser)
router.get('/user-list', UserController.listUser)

router.post('/add-message', MessageController.addMessage)
router.get('/list-message', MessageController.listMessage )
router.put('/update-message/:id', MessageController.updateMessage)
router.delete('/delete-message', MessageController.deleteMessage)

module.exports = router

