export type SuccessType = {
  status: 'success';
  message: string;
  data: object | null;
}

export type FailedType = {
  status: 'error';
  message: string;
  errors: object | null;
}