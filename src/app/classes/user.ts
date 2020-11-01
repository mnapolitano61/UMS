import {UserInterface} from '../interfaces/user';

export class User implements UserInterface{
  userId: number;
  name: string;
  surname: string;
  email: string;
  fiscalcode: string;
  province: string;
  phone: string;
  age: number;

  constructor() {
    this.userId = 0;
    this.name = '';
    this.surname = '';
    this.email = '';
    this.fiscalcode = '';
    this.province = '';
    this.phone = '';
    this.age = 18;
  }
}
