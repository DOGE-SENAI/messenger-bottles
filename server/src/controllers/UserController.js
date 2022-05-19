const { User } = require('../models')
const bcrypt = require("bcrypt");

module.exports = {

    async createUser(req, res) {

        try {
            const { name, username, password, img } = req.body

            const user = await User.findOne({ where: { username } })

            if (user) {
                res.status(401).json({ message: 'Já existe um usuario com este username' })
            } else {
                const user = await User.create({ name, username, password, img })

                res.status(200).json({ user })
            }
        } catch (error) {
            res.status(400).json({ error })
        }
    },

    async updateUser(req, res) {
        try {
            const { id } = req.params
            const { name, username, password, img } = req.body

            const user = await User.findOne({ where: { id } })

            if (!user) {
                res.status(401).json({ message: "Nenhum Usuario encontrado" })
            } else {
                const user = await User.update({ name, username, password, img }, { where: { id } })
                res.status(200).json({ user })
            }

        } catch (error) {
            res.status(400).json({error})
        }

    },

    async listUser (req, res) {
        try {
            const users = await User.findAll()

            if(!users) {
                res.status(401).json({message: "Não há usuario cadastrados"})
            }
            res.status(200).json({users})
        } catch (error) {
            res.status(400).json({error})
        }
    },

    async loginUser (req, res) {
        try {
            const { username, password } = req.body;
            const users = await User.findOne({ where: { username: username, password: password } })
            console.log(password)


            if ((password !== users.password) || (username !== users.username)) {
                res.json({ error: "Senha ou Username errados"})
                return;
            } else {
                res.json({message: 'Senha e Username corretos'})
                return
            }

        } catch (error) {
            res.status(400).json({error})
        }
    },
}


