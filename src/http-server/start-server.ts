import { HttpServer } from './http-server';

export class StartServer {

  constructor() {
    const httpServer = new HttpServer(3000);
    httpServer.configServer();
    httpServer.startServer();
  }

}

const startServer = new StartServer();
