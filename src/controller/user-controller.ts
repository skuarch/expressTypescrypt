import { Request, Response } from 'express';
import { UserService } from '../service/user-service';
import  runAsync from '../service/async-handler';
import { User } from 'src/model/user';

export class UserController {

  private userService = new UserService();

  getUser(req: Request, res: Response) {
    const user: User = {
      birthday: '',
      lastName: '',
      name: ''
    };
    res.send(user);
  }

  postUser(req: Request, res: Response) {
    runAsync(async (request: Request, response: Response) => {
      res.send(await this.userService.createUser(req.body));
    });
  }
}
