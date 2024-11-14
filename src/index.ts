import { Context, Hono } from 'hono'
import apiRoutes from '@routes/api'
import { Response } from '@utils/Response'

const app = new Hono()

app.all('*', (c: Context) => {
  return Response.resolveForFailed(c, 'Page not found')
})

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/api', apiRoutes)

export default app
