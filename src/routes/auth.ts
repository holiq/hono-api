import { Context, Hono } from 'hono'
import { LoginController } from '@/app/controller/Auth/LoginController'
import { RegisterController } from '@/app/controller/Auth/RegisterController'
import { RegisterValidator } from '@/app/validation/Auth/RegisterValidator'
import { LoginValidator } from '@/app/validation/Auth/LoginValidator'
import { Validate } from '@/utils/Validate'

const authRoutes: Hono = new Hono()

authRoutes.post('/login', Validate(LoginValidator), (c: Context) => LoginController.handle(c))
authRoutes.post('/register', Validate(RegisterValidator), (c: Context) => RegisterController.handle(c))

export default authRoutes
