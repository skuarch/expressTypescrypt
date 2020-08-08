import * as log4js from 'log4js';


export class Log4jsService {

  private loggerError: log4js.Logger;
  private loggerInfo: log4js.Logger;
  private loggerDebug: log4js.Logger;

  constructor() {
    this.loggerError = log4js.getLogger('error');
    this.loggerError.level = 'error';

    this.loggerInfo = log4js.getLogger('info');
    this.loggerInfo.level = 'info';

    this.loggerDebug = log4js.getLogger('debug');
    this.loggerDebug.level = 'debug';
  }

  error(message: string): void {
    this.loggerError.error(message);
  }

  info(message: string): void {
    this.loggerInfo.info(message);
  }

  debug(message: string): void {
    this.loggerDebug.debug(message);
  }

}
