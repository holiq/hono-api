import { LoginController } from '@/app/controller/auth/login.controller'
import { RegisterController } from '@/app/controller/auth/register.controller'
import { LoginValidator } from '@/app/validation/auth/login.validator'
import { RegisterValidator } from '@/app/validation/auth/register.validator'
import { Request } from '@/utils/request'
import { Hono } from 'hono'

const authRoutes: Hono = new Hono()

authRoutes.post('/login', Request.validate(LoginValidator), LoginController.handle)
authRoutes.post('/register', Request.validate(RegisterValidator), RegisterController.handle)

export default authRoutes