import { Response } from 'express'

interface ResponseType<T> {
  statusCode: number
  success: boolean
  message: string
  data: T
}

const sendResponse = <T>(res: Response, data: ResponseType<T>) => {
  return res.status(data.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
  })
}

export default sendResponse
