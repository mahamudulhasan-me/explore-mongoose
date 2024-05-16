import { Schema, model } from 'mongoose'
import { Name, Teacher } from './teacher.interface'

const nameSchema = new Schema<Name>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
})

const teacherSchema = new Schema<Teacher>({
  name: nameSchema,
  gender: ['male', 'female'],
  dateOfBirth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  qualification: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  teachingSubjects: {
    type: [String],
    required: true,
  },
  isPermanent: {
    type: Boolean,
    required: true,
  },
  profileImage: {
    type: String,
  },
})

export const TeacherModel = model('Teacher', teacherSchema)
