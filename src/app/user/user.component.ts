import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../users/user.service';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user-data') user;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  deleteUser() {
    this.userDeleted.emit(this.user);
    //this.userService.deleteUser(user);
  }
}
