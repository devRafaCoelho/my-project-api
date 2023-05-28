import { Router } from 'express'
import { CustomerController } from './controllers/CostumerController'
import { UserController } from './controllers/UserController'
import { authMiddleware } from './middlewares/authMiddleware'
import { schemaMiddleware } from './middlewares/schemaMiddleware'
import { costumerSchema } from './schemas/costumerSchemas'
import { loginSchema, registerUserSchema, updateUserSchema } from './schemas/userSchemas'

const routes = Router()

routes.post('/register', schemaMiddleware(registerUserSchema), new UserController().registerUser)
routes.post('/login', schemaMiddleware(loginSchema), new UserController().login)

routes.use(authMiddleware)

routes.get('/user', new UserController().getUser)
routes.put('/user', schemaMiddleware(updateUserSchema), new UserController().updateUser)
routes.delete('/user', new UserController().deleteUser)

routes.post('/customer', schemaMiddleware(costumerSchema), new CustomerController().register)
routes.get('/customer/:id', new CustomerController().getCustomer)
routes.get('/customer', new CustomerController().listCustomers)

export default routes
