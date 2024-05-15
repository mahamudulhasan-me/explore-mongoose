export interface Name {
  firstName: string
  lastName: string
}
export interface Guardian {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}
export interface LocalGuardian {
  name: string
  occupation: string
  contactNo: string
  address: string
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
  permanentAddress: string
  guardian: Guardian
  localGuardian: LocalGuardian
  profileImage?: string
}
