import type { ResponseType } from '@/types/response'
import { HttpStatus } from '@/utils/http-status'
import type { Context } from 'hono'
import type { StatusCode } from 'hono/utils/http-status'
import type { JSONParsed } from 'hono/utils/types'

export class Response {
  static resolveForSuccess(
    ctx: Context,
    message: string,
    data: null | object = null,
    statusCode: StatusCode = HttpStatus.OK
  ): JSONParsed<any> {
    const response: ResponseType = {
      status: 'success',
      message: message,
      data: data,
    }

    return ctx.json(response, statusCode)
  }

  static resolveForFailed(
    ctx: Context,
    message: string = '',
    errors: null | object = null,
    statusCode: StatusCode = HttpStatus.NotFound
  ): JSONParsed<any> {
    const response: ResponseType = {
      status: 'error',
      message: message,
      errors: errors,
    }

    return ctx.json(response, statusCode)
  }
}
