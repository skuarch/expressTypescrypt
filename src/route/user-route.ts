import { BaseRoute } from './base-route';
import { UserController } from '../controller/user-controller';
import { Router } from 'express';

export class UserRoute implements BaseRoute {

  private router: Router;
  private userController: UserController;

  constructor() {
    this.router = Router();
    this.userController = new UserController();
    this.initRoutes();
  }

  initRoutes(): void {
    this.router.get('/', this.userController.getUser);
    this.router.post('/', this.userController.postUser);
  }

  get getRouter(): Router {
    return this.router;
  }

}
