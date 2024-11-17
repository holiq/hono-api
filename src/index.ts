import apiRoutes from '@/routes/api'
import { Response } from '@/utils/response'
import { Context, Hono } from 'hono'

const app = new Hono()

app.notFound((c: Context) => {
  return Response.resolveForFailed(c, 'Not found')
})

app.get('/', (c: Context) => {
  return c.text('Hello Hono!')
})

app.route('/api', apiRoutes)

export default app
