import { Router } from 'express'
import { UserController } from './controllers/UserController'
import { authMiddleware } from './middlewares/authMiddleware'
import { schemaMiddleware } from './middlewares/schemaMiddleware'
import { loginSchema, registerUserSchema, updateUserSchema } from './schemas/userSchemas'

const routes = Router()

routes.post('/register', schemaMiddleware(registerUserSchema), new UserController().register)
routes.post('/login', schemaMiddleware(loginSchema), new UserController().login)

routes.use(authMiddleware)

routes.get('/user', new UserController().getUserdata)
routes.put('/user', schemaMiddleware(updateUserSchema), new UserController().updateUser)
routes.delete('/user', new UserController().deleteUser)

export default routes
