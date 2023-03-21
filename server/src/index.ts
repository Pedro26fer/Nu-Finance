import express from 'express'
import cors from 'cors'
import { AppDataSource } from './data-source'


const app = express()

app.use(express.json())

app.use(cors())

AppDataSource.initialize()
    .then(() => console.log("Database inicializado com sucesso"))
    .catch((err) => console.log("Erro na execução do bnco", err))

app.listen(3001, () => {
    console.log("Api no ar")
})