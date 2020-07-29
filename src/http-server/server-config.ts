import bodyParser = require('body-parser');
import { Application } from 'express';

export class ServerConfig {

  constructor(private app: Application) {

  }

  configParser(): void {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
  }

  configLog(): void {

  }

}