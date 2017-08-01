import { Component } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  email: string;
  password1: string;
  password2: string;
  passwordFail: boolean = false;

  constructor(private loginService: LoginService, private router: Router){}

  signUp() {
    if (this.password1 !== this.password2) {
      this.passwordFail = true;
    } else {
      this.passwordFail = false;
      this.loginService.register(this.email, this.password1);
      this.loginService.verifyUser();
    }
  }

  cancel(){
    this.router.navigate(['/login']);
  }

}
