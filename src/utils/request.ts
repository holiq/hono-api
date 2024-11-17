import { HttpStatus } from '@/utils/http-status'
import { Response } from '@/utils/response'
import { Context } from 'hono'
import { validator } from 'hono/validator'
import { z } from 'zod'

export class Request
{
  static validate(schema: z.Schema) {
    return validator('json', async (value, c: Context) => {
      const validate = schema.safeParse(await c.req.json())

      if (!validate.success) {
        return Response.resolveForFailed(c, validate.error.name, validate.error.format(), HttpStatus.UnprocessableEntity)
      }

      return validate.data
    })
  }
}