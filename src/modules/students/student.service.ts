import { Student } from './student.interface'
import StudentModel from './student.model'

const createStudentIntoDB = async (studentData: Student) => {
  const student = new StudentModel(studentData)
  const result = await student.save()
  // const result = await StudentModel.create(student)
  return result
}

const getStudents = async () => {
  const result = await StudentModel.find()
  return result
}

const getStudent = async (id: string) => {
  const result = await StudentModel.findOne({ id })
  return result
}
export const StudentServices = {
  createStudentIntoDB,
  getStudents,
  getStudent,
}
