import type { Context} from 'hono'
import { Hono } from 'hono'
import { HTTPException } from 'hono/http-exception'
import apiRoutes from '@/routes/api'
import { Response } from '@/utils/response'

const app = new Hono()

app.notFound((c: Context) => {
  return Response.resolveForFailed(c, 'Not found')
})

app.onError((err: Error, c: Context) => {
  if (err instanceof HTTPException) {
    const cause = err.cause as object | null

    return Response.resolveForFailed(c, err.message, cause, err.status)
  }
})

app.get('/', (c: Context) => {
  return c.text('Hello Hono!')
})

app.route('/api', apiRoutes)

export default app
