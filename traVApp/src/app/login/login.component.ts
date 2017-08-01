import { Component } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})

export class LoginComponent {
  email: string;
  password1: string;

  constructor(private loginService: LoginService, private router: Router) {

  }

  login(){
    this.loginService.login(this.email, this.password1);
    this.loginService.verifyUser();
  }

  signup(){
    this.router.navigate(['/register']);
  }

  cancel(){
    this.router.navigate(['']);
  }

}
