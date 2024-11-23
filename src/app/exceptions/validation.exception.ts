import { HTTPException } from 'hono/http-exception'
import type { StatusCode } from 'hono/utils/http-status'
import { HttpStatus } from '@/utils/http-status'

export class ValidationException extends HTTPException {
  constructor(
    message: string,
    errors: object | null = null,
    status: StatusCode = HttpStatus.UnprocessableEntity
  ) {
    super(status, { message, cause: errors })

    this.name = 'ValidationException'
  }
}
