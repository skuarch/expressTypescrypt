import { createServer } from 'http';
import * as express from 'express';
import { ServerConfig } from './server-config';

export class HttpServer {

  private app: express.Application;
  private serverConfig: ServerConfig;

  constructor(private port: number) {
    this.app = express();
    this.serverConfig = new ServerConfig(this.app);
  }

  startServer(): void {
    this.app.set('port', this.port);
    const server = createServer(this.app);
    server.listen(this.port, () => {
      // tslint:disable-next-line
      console.log('server running on port: ' + this.port);
    });
  }

  configServer() {
    this.serverConfig.configParser();
  }

}
