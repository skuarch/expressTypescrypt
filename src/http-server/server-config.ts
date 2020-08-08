import bodyParser = require('body-parser');
import { Application } from 'express';
import * as log4js from 'log4js';
import { Index } from '../route/index';

export class ServerConfig {

  private index: Index;

  constructor(private app: Application) {
    this.index = new Index();
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
  }

}