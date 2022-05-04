const express = require('express')
const bodyParser = require('body-parser')
const cors =  require('cors')
const routes = require('./routes')
const db = require("./src/models");

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(routes)


//app.listen(3000, () =>{
//    console.log("Servidor Rodando na Porta 3000")
///})

db.sequelize.sync().then(() => {
    console.log("Conectado ao banco de dados");
    app.listen(3000, () => console.log(`Example app listening on port 3000!`));
  });