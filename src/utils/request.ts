import { ValidationException } from '@/app/exceptions/validation.exception'
import { Context } from 'hono'
import { validator } from 'hono/validator'
import { z } from 'zod'

export class Request
{
  static validate(schema: z.Schema) {
    return validator('json', async (value, c: Context) => {
      const validate = schema.safeParse(await c.req.json())

      if (!validate.success) {
        throw new ValidationException('Request invalid', validate.error.format())
      }

      return validate.data
    })
  }
}