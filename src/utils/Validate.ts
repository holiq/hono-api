import { Context } from 'hono'
import { z } from 'zod'
import { Response } from '@/utils/Response'
import { HttpStatus } from '@/utils/HttpStatus'
import { validator } from 'hono/validator'

export const Validate = (schema: z.Schema) => validator('json', async (value, c: Context) => {
  const validate = schema.safeParse(await c.req.json())

  if (!validate.success) {
    return Response.resolveForFailed(c, validate.error.name, validate.error.format(), HttpStatus.UnprocessableEntity)
  }

  return validate.data
})
