import express from 'express'
import { TeacherControllers } from './teacher.controller'

const router = express.Router()

const { createTeacher, getTeachers, getTeacher } = TeacherControllers

router.get('/', getTeachers)
router.get('/:_id', getTeacher)
router.post('/create-teacher', createTeacher)

export const TeacherRoutes = router
