export class AppError extends Error {

  name = 'AppError';
  message: string;
  code: number;

  constructor(message: string, code: number) {
    super(message);
    this.code = code;
    this.message = message;
  }

  toString() {
    return `code: ${this.code}, message: ${this.message}`;
  }

}
