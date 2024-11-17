import type { FailedType, SuccessType } from '@/types/response'
import { HttpStatus } from '@/utils/http-status'
import { Context } from 'hono'

export class Response
{
  static resolveForSuccess(c: Context, message: string, data: null | object = null, status: HttpStatus = HttpStatus.OK) {
    const response: SuccessType = {
      status: 'success',
      message: message,
      data: data,
    }

    return c.json(response, status)
  }

  static resolveForFailed(c: Context, message: string = '', errors: null | object = null, status: HttpStatus = HttpStatus.NotFound) {
    const response: FailedType = {
      status: 'error',
      message: message,
      errors: errors,
    }

    return c.json(response, status)
  }
}