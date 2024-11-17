import { LoginController } from '@/app/controller/Auth/LoginController'
import { RegisterController } from '@/app/controller/Auth/RegisterController'
import { LoginValidator } from '@/app/validation/Auth/LoginValidator'
import { RegisterValidator } from '@/app/validation/Auth/RegisterValidator'
import { Validate } from '@/utils/Validate'
import { Hono } from 'hono'

const authRoutes: Hono = new Hono()

authRoutes.post('/login', Validate(LoginValidator), LoginController.handle)
authRoutes.post('/register', Validate(RegisterValidator), RegisterController.handle)

export default authRoutes
