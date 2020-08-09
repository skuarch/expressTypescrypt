export class AppError {

  message: string;
  code: number;

  constructor(message: string, code: number) {
    this.code = code;
    this.message = message;
  }

}
