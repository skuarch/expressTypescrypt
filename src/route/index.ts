import { Request, Response, Router } from 'express';
import { ControllerBase } from './controller-base';

export class Index implements ControllerBase {

  private router: Router;

  constructor() {
    this.router = Router();
  }

  get getRouter(): Router {
    this.router.get('/', (req: Request, res: Response) => {
      const str = 'arroz';
      res.send(str.split('').reverse().join(''));
    });
    return this.router;
  }

}

