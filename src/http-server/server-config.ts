import bodyParser = require('body-parser');
import { Application } from 'express';
import * as log4js from 'log4js';
import { Index } from '../route/index';
import { UserRoute } from '../route/user-route';
import { Request, Response } from 'express';
import { Log4jsService } from '../service/log4js-service';
import { AppError } from '../model/app-error';

export class ServerConfig {

  private log: Log4jsService;
  private index: Index;
  private userRoute: UserRoute;

  constructor(private app: Application) {
    this.log = new Log4jsService();
    this.index = new Index();
    this.userRoute = new UserRoute();
  }

  configParser(): void {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
  }

  configLog(): void {

    log4js.configure({
      appenders: {
        console: { type: 'stdout' },
        file: { type: 'file', filename: '/tmp/web-server/log/web-server.log' }
      },
      categories: {
        default: { appenders: ['console', 'file'], level: 'info' },
        error: { appenders: ['console', 'file'], level: 'error' },
        info: { appenders: ['console'], level: 'info' },
        debug: { appenders: ['console'], level: 'debug' }
      }
    });

  }

  configRoutes() {
    this.app.use('/', this.index.getRouter);
    this.app.use('/user', this.userRoute.getRouter);
  }

  configErrors() {
    this.app.use((error: any, req: Request, res: Response, next: any) => {
      if (error instanceof Error) {
        this.log.error(error);
        res.json({ error: error.message });
      } else if (error instanceof AppError) {
        this.log.appError(error);
        res.status(error.code);
        res.json(error);
      } else {
        this.log.stringError('possible wrong use of errors, plese use AppError or Error');
      }
    });
  }

}
