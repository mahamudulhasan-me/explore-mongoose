import { Request, Response } from 'express'
import { TeacherServices } from './teacher.service'

const createTeacher = async (req: Request, res: Response) => {
  try {
    const teacher = req.body.teacher
    const result = await TeacherServices.createTeacher(teacher)
    res.status(200).json({
      success: true,
      message: 'Teacher created successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const getTeachers = async (req: Request, res: Response) => {
  try {
    const teachers = await TeacherServices.getTeachers()
    res.status(200).json({
      success: true,
      message: 'Teachers get successfully',
      data: teachers,
    })
  } catch (error) {
    console.log(error)
  }
}

const getTeacher = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params
    const teacher = await TeacherServices.getTeacher(_id)
    res.status(200).json({
      success: true,
      message: 'Teacher get successfully',
      data: teacher,
    })
  } catch (error) {
    console.log(error)
  }
}

export const TeacherControllers = {
  createTeacher,
  getTeachers,
  getTeacher,
}
