import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { IUser } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser = { email: '', password: '', rememberMe: false };

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit() {
  }

  login() {
    this.authService.login(this.user);
    console.log(this.user);
  }

  register() {
    this.router.navigate(['/register']);
  }

}
