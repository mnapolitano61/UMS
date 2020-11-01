import {Injectable} from '@angular/core';
import {UserInterface} from '../interfaces/user';
import {User} from '../classes/user';

@Injectable()
export class UserService{
  users: Array<User> = [
    {
      userId: 1,
      name: 'Name',
      surname: 'Surname',
      email: 'name.surname@hotmail.com',
      fiscalcode: 'NM78adksd89',
      province: 'Province',
      phone: '3848592034',
      age: 22,
    },
    {
      userId: 2,
      name: 'Name_1',
      surname: 'Surname_1',
      email: 'name.surname_1@hotmail.com',
      fiscalcode: 'NM78HJUIK89',
      province: 'Province_1',
      phone: '3848592034',
      age: 24,
    },
    {
      userId: 3,
      name: 'Name_3',
      surname: 'Surname_3',
      email: 'name.surname_3@hotmail.com',
      fiscalcode: 'NM78adksd89',
      province: 'Province_3',
      phone: '3848592034',
      age: 26,
    },
    {
      userId: 4,
      name: 'Name_4',
      surname: 'Surname_4',
      email: 'name.surname_4@hotmail.com',
      fiscalcode: 'NM78HJUIK89',
      province: 'Province_4',
      phone: '3848592034',
      age: 25,
    }
  ];
  constructor() {
  }
  getUsers(){
    return this.users;
  }

  deleteUser(user: UserInterface) {
    const index = this.users.indexOf(user);
    if(index >= 0) {
      this.users.splice(index, 1);
    }
  }

  updateUser(user: UserInterface) {
    const index = this.users.findIndex((value) => value.userId === user.userId);
    if (index >= 0) {
      this.users[index] = user;
    }
  }

  createUser(user: UserInterface) {
    this.users.splice(0, 0, user);
  }
}
