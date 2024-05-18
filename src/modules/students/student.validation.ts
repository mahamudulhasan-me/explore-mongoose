import Joi from 'joi'

const JoiStudentSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.object({
    firstName: Joi.string()
      .required()
      .pattern(/^[A-Z][a-z]*$/, 'capitalize format')
      .messages({
        'string.pattern.name': 'First name is not capitalized',
        'string.empty': 'First name is required',
      }),
    lastName: Joi.string().allow(''),
  }).required(),
  isActive: Joi.string()
    .valid('active', 'inactive')
    .default('active')
    .messages({
      'any.only': 'Student status must be either active or inactive',
    }),
  gender: Joi.string().valid('male', 'female').required().messages({
    'any.only': 'Gender must be either male or female',
    'string.empty': 'Gender is required',
  }),
  dateOfBirth: Joi.date().iso().required().messages({
    'date.format': 'Date of birth must be in ISO format',
    'any.required': 'Date of birth is required',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Email must be a valid email address',
    'string.empty': 'Email is required',
  }),
  contactNumberNo: Joi.string().required().messages({
    'string.empty': 'Contact number is required',
  }),
  emergencyContactNo: Joi.string().required().messages({
    'string.empty': 'Emergency contact number is required',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'O+', 'AB+', 'B+', 'B-', 'AB-', 'O-')
    .optional()
    .messages({
      'any.only': 'Blood group must be one of A+, A-, O+, AB+, B+, B-, AB-, O-',
    }),
  presentAddress: Joi.string().required().messages({
    'string.empty': 'Present address is required',
  }),
  permanentAddress: Joi.string().allow(''),
  guardian: Joi.object({
    fatherName: Joi.string().required().messages({
      'string.empty': 'Father name is required',
    }),
    fatherOccupation: Joi.string().allow(''),
    fatherContactNo: Joi.string().allow(''),
    motherName: Joi.string().required().messages({
      'string.empty': 'Mother name is required',
    }),
    motherOccupation: Joi.string().allow(''),
  })
    .required()
    .messages({
      'any.required': 'Guardian information is required',
    }),
  localGuardian: Joi.object({
    name: Joi.string().required().messages({
      'string.empty': 'Local guardian name is required',
    }),
    occupation: Joi.string().allow(''),
    contactNo: Joi.string().allow(''),
    address: Joi.string().allow(''),
  })
    .required()
    .messages({
      'any.required': 'Local guardian information is required',
    }),
  profileImage: Joi.string().uri().allow(''),
})

export default JoiStudentSchema
