import {Component, OnInit} from '@angular/core';
import {UserService} from '../user/user.service';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  title = 'Users';
  users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  onDeleteUser(user) {
    this.userService.deleteUser(user);
  }

}
