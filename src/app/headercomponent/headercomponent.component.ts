import { Component, OnInit } from '@angular/core';
import { User } from '../login-form/user';

@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.scss'],
})
export class HeadercomponentComponent implements OnInit {
  hide = true;
  constructor() {}
  username = '';
  password = '';
  user: User = {
    username: this.username,
    password: this.password,
  };

  ngOnInit(): void {}
  onClickShow() {
    this.hide = !this.hide;
  }
}
