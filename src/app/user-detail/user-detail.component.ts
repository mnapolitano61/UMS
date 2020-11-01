import {Component, Input, OnInit} from '@angular/core';
import {User} from '../classes/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User;
  constructor(private userService: UserService) {}

  ngOnInit() {
  }

  updateUser() {
    if(this.user.userId > 0) {
      this.userService.updateUser(this.user);
    }
  }

}
