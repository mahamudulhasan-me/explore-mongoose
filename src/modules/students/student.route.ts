import express from 'express'
import { StudentControllers } from './student.controller'

const router = express.Router()
const { createStudent, getStudents, getStudent, deleteStudent } =
  StudentControllers

// will call controller func
router.get('/', getStudents)
router.get('/:id', getStudent)
router.post('/create-student', createStudent)
router.delete('/:id', deleteStudent)

export const StudentRoutes = router
