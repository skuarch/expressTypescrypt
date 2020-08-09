import { Request, Response } from 'express';
import { Log4jsService } from '../service/log4js-service';

export class AsyncHandler {

  log: Log4jsService

  constructor() {
    this.log = new Log4jsService();
  }

  runAsync(callback: any) {
    return (req: Request, res: Response, next: any) => {
      callback(req, res, next)
        .catch(next);
    }
  }
}