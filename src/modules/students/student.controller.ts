import { Request, Response } from 'express'
import { StudentServices } from './student.service'

const createStudent = async (req: Request, res: Response) => {
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

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error,
    })
  }
}

const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await StudentServices.getStudents()
    res.status(200).json({
      success: true,
      message: 'Students get successfully',
      data: students,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error,
    })
  }
}

const getStudent = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id
    const student = await StudentServices.getStudent(id)

    res.status(200).json({
      success: true,
      message: 'Student get successfully',
      data: student,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error,
    })
  }
}

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id
    const result = await StudentServices.deleteStudent(id)

    res.status(200).json({
      success: true,
      message: 'Student deleted successfully',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error,
    })
  }
}

export const StudentControllers = {
  createStudent,
  getStudents,
  getStudent,
  deleteStudent,
}
