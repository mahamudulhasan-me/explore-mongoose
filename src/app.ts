import cors from 'cors'
import express, { Request, Response } from 'express'
import errorHandler from './middlewares/errorHandler'
import notFound from './middlewares/notFound'
import router from './routers'

const app = express()

app.use(express.json())
app.use(cors())

// application routes
app.use('/api/v1/', router)

app.get('/', (req: Request, res: Response) => {
  res.send('Explore Mongoose')
})

app.use(errorHandler)
app.use(notFound)

export default app
