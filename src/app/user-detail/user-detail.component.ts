import {Component, OnInit, Input} from '@angular/core';
import {User} from '../classes/user';
import {UserService} from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private usercopy;
  private __user;
  public title: string;

  @Input() set user(user: User) {
    this.__user = user;
    this.usercopy = Object.assign({}, user);
  }

  get user() {
    return this.__user;
  }

  constructor(private userService: UserService,
              private activateRout: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.user = new User();
    this.activateRout.params.subscribe(
      (params) => {
        if(params.id){
          this.title = 'Modifica utente';
          this.user = this.userService.getUserById(+params.id);
        }else{
          this.title = 'Crea utente';
        }
      }
    );
  }

  backToUsers(){
    this.router.navigate(['users']);
  }

  saveUser() {
    if (this.user.id > 0) {
      this.userService.updateUser(this.user);
    } else {
      this.userService.createUser(this.user);
    }
    this.router.navigate(['users']);
  }

  resetForm(form) {
    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.user = this.usercopy;
    }
  }
}
