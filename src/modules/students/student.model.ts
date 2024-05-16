import { Schema, model } from 'mongoose'
import { Guardian, LocalGuardian, Name, Student } from './student.interface'

const nameSchema = new Schema<Name>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
})

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
  },
  fatherContactNo: {
    type: String,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
  },
})

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
  },
  contactNo: {
    type: String,
  },
  address: {
    type: String,
  },
})

const studentSchema = new Schema<Student>({
  id: { type: String, unique: true },
  name: nameSchema,
  isActive: ['active', 'inactive'],
  gender: ['male', 'female'],
  dateOfBirth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNumberNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  bloodGroup: ['A+', 'A-', 'O+', 'AB+', 'B+', 'B-', 'AB-', 'O-'],
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
  },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImage: {
    type: String,
  },
})

const StudentModel = model<Student>('Student', studentSchema)

export default StudentModel
