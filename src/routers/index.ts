import { Router } from 'express'
import { StudentRoutes } from '../modules/students/student.route'
import { TeacherRoutes } from '../modules/teachers/teacher.route'

const router = Router()

const routersModules = [
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/teachers',
    route: TeacherRoutes,
  },
]

routersModules.forEach(route => router.use(route.path, route.route))

export default router
