import { Request, Response } from 'express'

const notFound = (req: Request, res: Response) => {
  return res.status(200).json({
    success: false,
    message: 'Api not found!',
  })
}

export default notFound
