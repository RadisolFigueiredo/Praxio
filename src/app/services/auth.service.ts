import { IUser } from '../auth/login/user';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAthenticated: boolean = false;

  // email = "/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\."
  constructor(
    private router: Router,
    // private http: HttpClient
  ) {}

  login(user: IUser) {
    if(user.email !== ''  && user.senha !== '') {
      this.userAthenticated = true;
      this.router.navigate(['/home']);
    } else {
      this.userAthenticated = false;
    }
  }

  checkPermission() {
    return this.userAthenticated;
  }
}
