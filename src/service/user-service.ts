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
    user.id = 1;
    return user;
  }

}
