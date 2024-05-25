/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express'

const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  return res.status(500).json({
    success: false,
    message: error.message,
    error,
  })
}

export default errorHandler
