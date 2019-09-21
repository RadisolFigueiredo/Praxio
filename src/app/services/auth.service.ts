import { IUser } from './../view/login/user';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAthenticated: boolean = false;

  constructor(
    private router: Router,
  ) {}

  login(user: IUser) {
    if(user.email === 'user@email.com' && user.password === '123456') {
      this.userAthenticated = true;
      this.router.navigate(['/home']);
      console.log(this.userAthenticated);
    } else {
      this.userAthenticated = false;
    }
  }

  checkPermission() {
    return this.userAthenticated;
  }
}
