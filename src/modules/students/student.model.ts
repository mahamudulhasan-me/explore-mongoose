import { Schema } from 'mongoose'
import { Student } from './student.interface'

export const studentSchema = new Schema<Student>({
  id: { type: String },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
  },
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
  guardian: {
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
  },
  localGuardian: {
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
  },
  profileImage: {
    type: String,
  },
})
