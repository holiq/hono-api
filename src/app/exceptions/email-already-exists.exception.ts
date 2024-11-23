import { HTTPException } from 'hono/http-exception'
import type { StatusCode } from 'hono/utils/http-status'
import { HttpStatus } from '@/utils/http-status'

export class EmailAlreadyExistsException extends HTTPException {
  constructor(message: string, status: StatusCode = HttpStatus.Conflict) {
    super(status, { message })

    this.name = 'EmailAlreadyExistsException'
  }
}
