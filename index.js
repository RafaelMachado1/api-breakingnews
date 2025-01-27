import express from "express"
import connetcDatabase from "./src/database/database.js"
import userRoute from "./src/routes/user.route.js"
import dotenv from "dotenv"
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();


connetcDatabase()
app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))

//Rota
    // Method HTTP / CRUD (CREATE, READ, UPDATE, DELETE)
        //GET - Pega um info           READ
        //POST - Cria uma info -       CREATE
        //PUT - Altera toda a info     UPDATE
        //PATH - Altera parte da info  UPDATE
        //DELETE - Apaga uma info      DELETE

    // Name - Um identificador da rota

    // Function (Callback) - Responsável por executar algum comando

