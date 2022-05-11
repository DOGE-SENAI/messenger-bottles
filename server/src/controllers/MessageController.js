const { Message } = require('../models')

module.exports = {

    async addMessage(req, res) {

        try {
            const { text, user_id, time} = req.body

            const messages = await Message.findOne({ where: { user_id } })

            if (messages == "") {
                res.status(401).json({ message: 'Menssagem vazia!' })
            } else {
                const messages = await Message.create({ text, user_id, time })

                res.status(200).json({ messages })
            }
        } catch (error) {
            res.status(400).json({ error })
            console.log(error)
        }
    },

    async listMessage(req, res) {
        try {
            const messages = await Message.findAll()

            if (!messages) {
                res.status(401).json({message: "Não há mensagens inseridas"})
            }
            res.status(200).json({messages})
        } catch (error) {
            res.status(400).json({ error })
        }
    }
}