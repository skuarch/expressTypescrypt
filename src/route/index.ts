import { Request, Response, Router } from 'express';
import { BaseRoute } from './base-route';

export class Index implements BaseRoute {

  private router: Router;

  constructor() {
    this.router = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.getIndex();
  }

  get getRouter(): Router {
    return this.router;
  }

  private getIndex(): void {
    this.router.get('/', (req: Request, res: Response) => {
      const str = 'hello';
      res.send(str.split('').reverse().join(''));
    });
  }

}
