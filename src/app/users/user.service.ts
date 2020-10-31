import {Injectable} from '@angular/core';

@Injectable()
export class UserService{
  getUsers(){
    return [
      {
        name: 'Name',
        surname: 'Surname',
        email: 'name.surname@hotmail.com',
        fiscalcode: 'NM78adksd89',
        province: 'Province',
        phone: '3848592034',
        age: 22,
      },
      {
        name: 'Name_1',
        surname: 'Surname_1',
        email: 'name.surname_1@hotmail.com',
        fiscalcode: 'NM78HJUIK89',
        province: 'Province_1',
        phone: '3848592034',
        age: 24,
      },
      {
        name: 'Name_3',
        surname: 'Surname_3',
        email: 'name.surname_3@hotmail.com',
        fiscalcode: 'NM78adksd89',
        province: 'Province_3',
        phone: '3848592034',
        age: 26,
      },
      {
        name: 'Name_4',
        surname: 'Surname_4',
        email: 'name.surname_4@hotmail.com',
        fiscalcode: 'NM78HJUIK89',
        province: 'Province_4',
        phone: '3848592034',
        age: 25,
      }
    ];
  }
}