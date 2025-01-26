const express = require('express')
const userRoute = require("./src/routes/user.route")
const app = express()

app.use("/soma", userRoute)

//Rota
    // Method HTTP / CRUD (CREATE, READ, UPDATE, DELETE)
        //GET - Pega um info           READ
        //POST - Cria uma info -       CREATE
        //PUT - Altera toda a info     UPDATE
        //PATH - Altera parte da info  UPDATE
        //DELETE - Apaga uma info      DELETE

    // Name - Um identificador da rota

    // Function (Callback) - Responsável por executar algum comando

app.listen(3000)