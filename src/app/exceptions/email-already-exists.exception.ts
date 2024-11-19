import { HttpStatus } from '@/utils/http-status'
import { HTTPException } from 'hono/http-exception'
import { StatusCode } from 'hono/utils/http-status'

export class EmailAlreadyExistsException extends HTTPException
{
  constructor(message: string, status: StatusCode = HttpStatus.Conflict) {
    super(status, {message})

    this.name = 'EmailAlreadyExistsException'
  }
}