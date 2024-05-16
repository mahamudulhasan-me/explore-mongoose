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

export const TeacherController = {
  createTeacher,
}
