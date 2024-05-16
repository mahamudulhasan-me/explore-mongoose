import { Teacher } from './teacher.interface'
import { TeacherModel } from './teacher.model'

const createTeacher = async (teacher: Teacher) => {
  const result = await TeacherModel.create(teacher)
  return result
}

export const TeacherServices = {
  createTeacher,
}
