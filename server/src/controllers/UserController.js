const { User } = require('../models')

module.exports = {

    async createUser(req, res) {

        try {
            const { name, email, password } = req.body

            const user = await User.findOne({ where: { email } })

            if (user) {
                res.status(401).json({ message: 'Já existe um usuario com este email' })
            } else {
                const user = await User.create({ name, email, password })

                res.status(200).json({ user })
            }
        } catch (error) {
            res.status(400).json({ error })
        }
    },

    async updateUser(req, res) {
        try {
            const { id } = req.params
            const { name, email, password } = req.body

            const user = await User.findOne({ where: { id } })

            if (!user) {
                res.status(401).json({ message: "Nenhum Usuario encontrado" })
            } else {
                const user = await User.update({ name, email, password }, { where: { id } })
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
    }
}


