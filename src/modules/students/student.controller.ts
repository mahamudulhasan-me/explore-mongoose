import { Request, Response } from 'express'
import { StudentServices } from './student.service'

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student
    const result = await StudentServices.createStudentIntoDB(student)
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
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
    console.log(error)
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
    console.log(error)
  }
}

export const StudentControllers = {
  createStudent,
  getStudents,
  getStudent,
}
