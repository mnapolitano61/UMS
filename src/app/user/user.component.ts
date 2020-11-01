import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../interfaces/user';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user-data') user: User;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output('onSelectUser') userSelected = new EventEmitter();
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  deleteUser() {
    this.userDeleted.emit(this.user);
    //this.userService.deleteUser(user);
  }
  updateUser() {
    this.userSelected.emit(this.user);
    //this.userService.deleteUser(user);
  }
}
