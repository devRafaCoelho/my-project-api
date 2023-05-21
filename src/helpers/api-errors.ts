export class ApiError extends Error {
  public readonly statusCode: number

  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
  }
}

export class Ok extends ApiError {
  constructor(message: string) {
    super(message, 200)
  }
}

export class BadRequest extends ApiError {
  constructor(message: string) {
    super(message, 400)
  }
}

export class NotFound extends ApiError {
  constructor(message: string) {
    super(message, 404)
  }
}

export class Unauthorized extends ApiError {
  constructor(message: string) {
    super(message, 401)
  }
}
