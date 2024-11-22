import { HttpStatus } from '@/utils/http-status'
import { HTTPException } from 'hono/http-exception'
import { StatusCode } from 'hono/utils/http-status'

export class UnauthenticatedException extends HTTPException {
  constructor(message: string, status: StatusCode = HttpStatus.Unauthorized) {
    super(status, { message })

    this.name = 'UnauthenticatedException'
  }
}
