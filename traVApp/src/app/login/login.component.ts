import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({ 
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
 })

export class LoginComponent {
  email: string;
  password: string;

  constructor(public authService: AuthService) {}

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

  logout() {
    this.authService.logout();
  }
}
