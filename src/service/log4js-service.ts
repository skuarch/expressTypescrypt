import * as log4js from 'log4js';
import { AppError } from 'src/model/app-error';


export class Log4jsService {

  private loggerError: log4js.Logger;
  private loggerInfo: log4js.Logger;
  private loggerDebug: log4js.Logger;
  private loggerWarn: log4js.Logger;

  constructor() {
    this.loggerError = log4js.getLogger('error');
    this.loggerError.level = 'error';

    this.loggerInfo = log4js.getLogger('info');
    this.loggerInfo.level = 'info';

    this.loggerDebug = log4js.getLogger('debug');
    this.loggerDebug.level = 'debug';

    this.loggerWarn = log4js.getLogger('warn');
    this.loggerWarn.level = 'warn';
  }

  error(error:Error): void {
    this.loggerError.error(error);
  }

  appError(error: AppError): void {
    const e = `code: ${error.code}, message: ${error.message}`;
    this.stringError(e);
  }

  stringError(message: string): void {
    this.loggerError.error(message);
  }

  info(message: string): void {
    this.loggerInfo.info(message);
  }

  debug(message: string): void {
    this.loggerDebug.debug(message);
  }

  warn(message: string): void {
    this.loggerWarn.warn(message);
  }

}
