export interface Name {
  firstName: string
  lastName: string
}

export interface Teacher {
  name: Name
  gender: 'male' | 'female'
  dateOfBirth: string
  email: string
  contactNumber: string
  address: string
  qualification: string
  experience: string
  teachingSubjects: string[]
  isPermanent: boolean
  profileImage: string
}
