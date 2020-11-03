import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../classes/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  private user: User;
  public title = 'User Detail';
  constructor(private activateRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.user = new User();
    this.activateRoute.params.subscribe( param => {
    this.user = this.userService.getUserById(+param.id);
    });
  }

  backToUsers(){
    this.router.navigate(['users']);
  }
}
