import { HttpStatus } from '@/utils/http-status'
import { HTTPException } from 'hono/http-exception'
import { StatusCode } from 'hono/utils/http-status'

export class InternalServerErrorException extends HTTPException {
  constructor(errors: any = null, status: StatusCode = HttpStatus.InternalServerError) {
    super(status, { message: 'Internal Server Error', cause: errors })

    this.name = 'InternalServerErrorException'
  }
}
