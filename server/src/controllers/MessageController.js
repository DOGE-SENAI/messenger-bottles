const { Message } = require('../models/message')

module.exports = {

    async addMessage(req, res) {

        try {
            const { text, userId, time} = req.body

            const message = await Message.findOne({ where: { userId } })

            if (message == "") {
                res.status(401).json({ message: 'Menssagem vazia!' })
            } else {
                const message = await Message.create({ text, userId, time })

                res.status(200).json({ message })
            }
        } catch (error) {
            res.status(400).json({ error })
        }
    }
}