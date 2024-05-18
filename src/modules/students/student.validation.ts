import * as z from 'zod'

// Define Zod schema for Name
const ZodNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(50)
    .refine(value => /^[A-Z][a-z]*$/.test(value), {
      message: 'First name must start with a capital letter',
    }),
  lastName: z.string().optional(),
})

// Define Zod schema for Guardian
const ZodGuardianValidationSchema = z.object({
  fatherName: z.string().min(1),
  fatherOccupation: z.string().optional(),
  fatherContactNo: z.string().optional(),
  motherName: z.string().min(1),
  motherOccupation: z.string().optional(),
})

// Define Zod schema for LocalGuardian
const ZodLocalGuardianValidationSchema = z.object({
  name: z.string().min(1),
  occupation: z.string().optional(),
  contactNo: z.string().optional(),
  address: z.string().optional(),
})

// Define Zod schema for Student
const ZodStudentValidationSchema = z.object({
  id: z.string(),
  name: ZodNameValidationSchema,
  isActive: z.enum(['active', 'inactive']).default('active'),
  gender: z.enum(['male', 'female']),
  dateOfBirth: z.string(),
  email: z.string().email(),
  contactNumberNo: z.string(),
  emergencyContactNo: z.string(),
  bloodGroup: z
    .enum(['A+', 'A-', 'O+', 'AB+', 'B+', 'B-', 'AB-', 'O-'])
    .optional(),
  presentAddress: z.string(),
  permanentAddress: z.string().optional(),
  guardian: ZodGuardianValidationSchema,
  localGuardian: ZodLocalGuardianValidationSchema,
  profileImage: z.string().url().optional(),
})

export default ZodStudentValidationSchema
