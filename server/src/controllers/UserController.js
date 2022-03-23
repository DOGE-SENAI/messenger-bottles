const {User} = require('../models')

module.exports = {
    async createUser (req, res) {

        try {
            const {name, email, senha} = req.body

            const user = await User.findOne({where: {email}})
            if(user) {
                res.send(200).json({message: "Já existe um usuario com este email"})
            } else {
                await User.create({name, email, senha})

                res.status(200).json({user})
            }

            
        
        } catch (error) {
            
            res.status(400).json({err})
        }  
    }
}


