import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    // canActivate: [AuthGuard],
    component: HomeComponent,
    data: {
      title: 'home',
    },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'login',
    },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'register',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
