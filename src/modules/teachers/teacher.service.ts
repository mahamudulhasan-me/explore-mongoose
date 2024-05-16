import { Teacher } from './teacher.interface'
import { TeacherModel } from './teacher.model'

const createTeacher = async (teacher: Teacher) => {
  const result = await TeacherModel.create(teacher)
  return result
}

const getTeachers = async () => {
  const result = await TeacherModel.find()
  return result
}

const getTeacher = async (_id: string) => {
  const result = await TeacherModel.findById(_id)
  return result
}

export const TeacherServices = {
  createTeacher,
  getTeachers,
  getTeacher,
}
