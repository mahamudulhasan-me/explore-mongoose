import { NextFunction, Request, Response } from 'express'
import sendResponse from '../../utils/sendResponse'
import { Student } from './student.interface'
import { StudentServices } from './student.service'

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Define Joi schema for Student

    const student = req.body.student
    // const { error, value } = JoiStudentSchema.validate(student)
    // const ZodParseData = ZodStudentValidationSchema.parse(student)
    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Something went wrong!',
    //     error,
    //   })
    // }

    const result = await StudentServices.createStudentIntoDB(student)

    sendResponse<Student>(res, {
      statusCode: 200,
      success: true,
      message: 'Student is created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const students = await StudentServices.getStudents()
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Students get successfully',
      data: students,
    })
  } catch (error) {
    next(error)
  }
}

const getStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id: string = req.params.id
    const student = await StudentServices.getStudent(id)

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Student get successfully',
      data: student,
    })
  } catch (error) {
    next(error)
  }
}

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id: string = req.params.id
    const result = await StudentServices.deleteStudent(id)

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Student deleted successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const StudentControllers = {
  createStudent,
  getStudents,
  getStudent,
  deleteStudent,
}
