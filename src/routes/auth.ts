import { LoginController } from '@/app/controller/auth/login.controller'
import { RegisterController } from '@/app/controller/auth/register.controller'
import { LoginValidator } from '@/app/validation/auth/login.validator'
import { RegisterValidator } from '@/app/validation/auth/register.validator'
import { Validate } from '@/utils/validate'
import { Hono } from 'hono'

const authRoutes: Hono = new Hono()

authRoutes.post('/login', Validate(LoginValidator), LoginController.handle)
authRoutes.post('/register', Validate(RegisterValidator), RegisterController.handle)

export default authRoutes
