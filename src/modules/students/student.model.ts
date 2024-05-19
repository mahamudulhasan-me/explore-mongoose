import bcrypt from 'bcrypt'
import { Schema, model } from 'mongoose'
import validator from 'validator'
import config from '../../config'
import { Guardian, LocalGuardian, Name, Student } from './student.interface'

const nameSchema = new Schema<Name>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    validate: {
      validator: function (value: string) {
        const ideaNameFormat = value.charAt(0).toUpperCase() + value.slice(1)
        return ideaNameFormat === value
      },
      message: '{VALUE} is not capitalize format',
    },
  },
  lastName: {
    type: String,
  },
})

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true, 'Father name is required'],
  },
  fatherOccupation: {
    type: String,
  },
  fatherContactNo: {
    type: String,
  },
  motherName: {
    type: String,
    required: [true, 'Mother name is required'],
  },
  motherOccupation: {
    type: String,
  },
})

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: [true, 'Local guardian name is required'],
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
  name: {
    type: nameSchema,
    trim: true,
    required: [true, 'Name is required'],
    maxlength: [50, 'Name should not be more than 50 characters'],
  },
  password: {
    type: String,
    required: true,
  },
  isActive: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is not valid gender',
    },
    required: [true, 'Gender is required'],
  },
  dateOfBirth: {
    type: String,
    required: [true, 'Date of birth is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} is not email',
    },
  },
  contactNumberNo: {
    type: String,
    required: [true, 'Contact number is required'],
    unique: true,
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'Contact number is required'],
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'O+', 'AB+', 'B+', 'B-', 'AB-', 'O-'],
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required'],
  },
  permanentAddress: {
    type: String,
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian is required'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local guardian is required'],
  },
  profileImage: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
})

studentSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this
  this.password = await bcrypt.hash(
    user.password,
    Number(config.BCRYPT_SALT_ROUND),
  )
  next()
})

studentSchema.post('save', (doc, next) => {
  doc.password = ''
  next()
})

studentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } })
  next()
})

studentSchema.pre('find', function () {
  console.log(this)
})

const StudentModel = model<Student>('Student', studentSchema)

export default StudentModel
