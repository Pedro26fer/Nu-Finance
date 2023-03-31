import express from 'express'
import cors from 'cors'
import { signUpRoute } from './routes/sigupUser.routes'




const app = express()

app.use(express.json())

app.use(cors())


signUpRoute(app)

export default app

