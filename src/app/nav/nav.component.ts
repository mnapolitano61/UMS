import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() onNewUser = new EventEmitter();
  public showMenu = false;
  constructor() {
  }

  ngOnInit() {
  }

  newUser() {
    this.onNewUser.emit();
  }

  toggleMenu(){
    this.showMenu = !this.showMenu;
  }
}
