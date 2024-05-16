import cors from 'cors'
import express, { Request, Response } from 'express'
import { StudentRoutes } from './modules/students/student.route'

const app = express()

app.use(express.json())
app.use(cors())

// application routes
app.use('/api/v1/students', StudentRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Explore Mongoose')
})

export default app
