import { Hono } from 'hono'
import authRoutes from '@/routes/auth'

const apiRoutes = new Hono()

apiRoutes.route('/auth', authRoutes)

export default apiRoutes