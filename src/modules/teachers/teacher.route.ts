import express from 'express'
import { TeacherController } from './teacher.controller'

const router = express.Router()

const { createTeacher } = TeacherController

router.post('/create-teacher', createTeacher)

export const TeacherRoutes = router
