const { Router } = require('express')

const router = Router()

const UserController = require('./src/controllers/UserController')

router.post('/user-create', UserController.createUser)
router.get('/', (req, res) => {
    res.send("Hello World")
})

module.exports = router

