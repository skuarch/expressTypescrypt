import { BaseRoute } from './base-route';
import { Request, Response, Router } from 'express';
import { UserService } from '../service/user-service';
import { AsyncHandler } from '../service/async-handler';

export class UserRoute implements BaseRoute {

  private router: Router;
  private userService: UserService;
  private asyncHandler: AsyncHandler;

  constructor() {
    this.router = Router();
    this.userService = new UserService();
    this.asyncHandler = new AsyncHandler();
    this.initRoutes();
  }

  initRoutes(): void {
    this.getUser();
    this.postUser();
  }

  get getRouter(): Router {
    return this.router;
  }

  private getUser(): void {
    this.router.get('/', this.asyncHandler.runAsync(async (req: Request, res: Response) => {
      res.send(await this.userService.getUser());
    }));
  }

  private postUser(): void {
    this.router.post('/', this.asyncHandler.runAsync(async (req: Request, res: Response) => {
      res.send(await this.userService.createUser(req.body));
     }));
  }

}
