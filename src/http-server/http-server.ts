import { createServer } from 'http';
import * as express from 'express';
import { ServerConfig } from './server-config';
import { Log4jsService } from '../service/log4js-service';


export class HttpServer {

  private app: express.Application;
  private serverConfig: ServerConfig;
  private loggerService: Log4jsService;


  constructor(private port: number) {
    this.app = express();
    this.serverConfig = new ServerConfig(this.app);
    this.loggerService = new Log4jsService();

  }

  configServer() {
    this.serverConfig.configParser();
    this.serverConfig.configLog();
    this.serverConfig.configRoutes();
    this.serverConfig.configErrors();
  }

  startServer(): void {
    const server = createServer(this.app);
    server.listen(this.port, () => {
      this.loggerService.info(`server running on port: ${this.port}`);
    });
  }

}
