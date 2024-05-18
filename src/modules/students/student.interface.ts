export interface Name {
  firstName: string
  lastName?: string | undefined
}
export interface Guardian {
  fatherName: string
  fatherOccupation: string | undefined
  fatherContactNo: string | undefined
  motherName: string | undefined
  motherOccupation: string | undefined
  motherContactNo: string | undefined
}
export interface LocalGuardian {
  name: string
  occupation: string | undefined
  contactNo: string | undefined
  address: string | undefined
}
export interface Student {
  id: string
  name: Name
  isActive: 'active' | 'inactive'
  gender: 'male' | 'female'
  dateOfBirth: string
  email: string
  contactNumberNo: string
  emergencyContactNo: string
  bloodGroup?: 'A+' | 'A-' | 'O+' | 'AB+' | 'B+' | 'B-' | 'AB-' | 'O-'
  presentAddress: string
  permanentAddress: string | undefined
  guardian: Guardian
  localGuardian: LocalGuardian
  profileImage?: string | undefined
}
