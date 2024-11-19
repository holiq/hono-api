import type { ResponseType } from '@/types/response'
import { HttpStatus } from '@/utils/http-status'
import { Context } from 'hono'

export class Response
{
  static resolveForSuccess(ctx: Context, message: string, data: null | object = null, statusCode: HttpStatus = HttpStatus.OK) {
    const response: ResponseType = {
      status: 'success',
      message: message,
      data: data,
    }

    return ctx.json(response, statusCode)
  }

  static resolveForFailed(ctx: Context, message: string = '', errors: null | object = null, statusCode: HttpStatus = HttpStatus.NotFound) {
    const response: ResponseType = {
      status: 'error',
      message: message,
      errors: errors,
    }

    return ctx.json(response, statusCode)
  }
}