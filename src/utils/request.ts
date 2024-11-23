import type { Context } from 'hono'
import { validator } from 'hono/validator'
import type { z } from 'zod'
import { ValidationException } from '@/app/exceptions/validation.exception'

export class Request {
  static validate(schema: z.Schema) {
    return validator('json', async (val: undefined, c: Context) => {
      const validate = schema.safeParse(await c.req.json())

      if (!validate.success) {
        throw new ValidationException('Request invalid', validate.error.format())
      }

      return validate.data
    })
  }
}
