import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../type/LoginForm';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  // username = '';
  // password = '';
  form: LoginForm = {
    username: '',
    password: '',
  };
  constructor() {}
  ngOnInit(): void {}
  submit() {
    console.log(this.form);
  }
}
