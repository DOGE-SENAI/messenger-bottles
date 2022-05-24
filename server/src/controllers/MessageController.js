const { Message } = require("../models");

module.exports = {
	async addMessage(req, res) {
		try {
			const { text, user_id, time, username } = req.body;
			const messages = await Message.findOne({ where: { text } });

			if (messages == "") {
				res.status(401).json({ message: "Menssagem vazia!" });
			} else {
				const messages = await Message.create({
					text,
					user_id,
					time,
					username,
				});
				res.status(200).json({ messages });
			}
		} catch (error) {
			console.log(error);
			res.status(400).json({ error });
		}
	},

	async listMessage(req, res) {
		try {
			const messages = await Message.findAll();

			if (!messages) {
				res.status(401).json({ message: "Não há mensagens inseridas" });
			}
			res.status(200).json({ messages });
		} catch (error) {
			res.status(400).json({ error });
		}
	},

	async updateMessage(req, res) {
		try {
			const { id } = req.params;
			const { text } = req.body;
			const messages = await Message.findOne({ where: { id } });

			if (!messages) {
				res.status(401).json({ message: "Nenhuma Mensagem encontrado" });
			} else {
				Message.update({ text: text }, { where: { id: id } });
				res.status(200).json({ messages });
			}
		} catch (error) {
			res.status(400).json({ error });
		}
	},

	async deleteMessage(req, res) {
		try {
			const { id } = req.body;

			const messages = await Message.findOne({ where: { id: id } });

			if (!messages) {
				res.json({ message: "Mensagem Inexistente!" });
			} else {
				Message.destroy({ where: { id: id } });
				res.status(200).json({ message: "Mensagem excluída" });
			}
		} catch (error) {
			res.status(400).json({ error });
			console.log(error);
		}
	},
};
