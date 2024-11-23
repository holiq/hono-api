import { HTTPException } from 'hono/http-exception'
import type { StatusCode } from 'hono/utils/http-status'
import { HttpStatus } from '@/utils/http-status'

export class InternalServerErrorException extends HTTPException {
  constructor(errors: object | null = null, status: StatusCode = HttpStatus.InternalServerError) {
    super(status, { message: 'Internal Server Error', cause: errors })

    this.name = 'InternalServerErrorException'
  }
}
