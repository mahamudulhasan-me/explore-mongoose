import express from 'express'
import { StudentControllers } from './student.controller'

const router = express.Router()
const { createStudent, getStudents, getStudent } = StudentControllers

// will call controller func
router.get('/', getStudents)
router.get('/:id', getStudent)
router.post('/create-student', createStudent)

export const StudentRoutes = router
