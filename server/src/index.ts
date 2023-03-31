import express from 'express'
import cors from 'cors'
import { signUpRoute } from './routes/sigupUser.routes'
import { globalErrorMiddleware } from './middlewares/globalError.middleware'




const app = express()

app.use(express.json())

app.use(globalErrorMiddleware)

app.use(cors())


signUpRoute(app)

export default app

