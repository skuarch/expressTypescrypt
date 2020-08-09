import { User } from 'src/model/user';
import { AppError } from '../model/app-error';

export class UserService {

  getUser(): User {
    const user: User = {
      name: 'skuarch',
      lastName: 'el chingon',
      birthday: ''
    }
    return user;
  }

  createUser(user: User): User {
    throw new AppError('error inside of create user', 500);
    user.id = 1;
    return user;
  }

}
