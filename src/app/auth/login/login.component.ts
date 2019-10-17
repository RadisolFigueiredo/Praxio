import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { IUser } from './user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser = { email: '', senha: '', rememberMe: false };

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
  }

  login() {
    this.toastr.success(
      'Login realizado com sucesso!'
    );
    this.router.navigate(['/home']);
  }

  register() {
    this.router.navigate(['/register']);
  }

}
