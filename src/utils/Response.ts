import { Context } from 'hono'
import { HttpStatus } from '@utils/HttpStatus'
import { JSONParsed } from 'hono/dist/types/utils/types'

export class Response
{
  static resolveForSuccess(c: Context, message: string, data: null | object = null, status: HttpStatus = HttpStatus.OK): JSONParsed<any> {
    return c.json({
      status: 'success',
      message: message,
      data: data,
    }, status)
  }

  static resolveForFailed(c: Context, message: string, errors: null | object = null, status: HttpStatus = HttpStatus.NotFound): JSONParsed<any> {
    return c.json({
      status: 'error',
      message: message,
      errors: errors,
    }, status)
  }
}