export type ResponseType = {
  status: 'success' | 'error'
  message: string
  errors?: object | null
  data?: object | null
}
