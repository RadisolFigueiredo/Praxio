import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/register/register.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './view/logout/logout.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextMaskModule } from 'angular2-text-mask';
import { CepService } from './services/cep/cep.service';
import { SharedModule } from './shared/shared.module';
import { FooterDeslogComponent } from './view/footer/footer-deslog/footer-deslog.component';
import { NavDeslogComponent } from './view/nav/nav-deslog/nav-deslog.component';
import { NavHomeComponent } from './view/home/nav-home/nav-home.component';
import { FooterComponent } from './view/home/footer/footer.component';
import { CardsComponent } from './view/home/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    FooterDeslogComponent,
    NavDeslogComponent,
    NavHomeComponent,
    FooterComponent,
    CardsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    TextMaskModule,
    BrowserAnimationsModule,
    SharedModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthService, AuthGuard, CepService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
