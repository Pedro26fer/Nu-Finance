import express from 'express'
import cors from 'cors'
import { signUpRoute } from './routes/sigupUser.routes'
import { globalErrorMiddleware } from './middlewares/globalError.middleware'
import { signInUserRoute } from './routes/signInUser.routes'




const app = express()

app.use(express.json())

app.use(globalErrorMiddleware)

app.use(cors())


signUpRoute(app)
signInUserRoute(app)

export default app

