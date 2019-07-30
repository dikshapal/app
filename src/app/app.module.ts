import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt/angular2-jwt';
import { OrderService } from './services/order.service';
import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './helpers/fake-backend';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AuthGuard } from './services/auth-guard.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';

import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule , Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BaseRequestOptions } from '@angular/http';
import {  HttpClientService,Submit } from 'app/services/http-client.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    WelcomeComponent,
    NotFoundComponent,
    NoAccessComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminAuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'no-access', component: NoAccessComponent },
      {path:'signup', component: SignupComponent },
      {path:'navigation',component:NavigationComponent},
      {path:'home',component:HomeComponent}
    ])
  ],
  providers: [
    OrderService,
    BaseRequestOptions,
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    HttpClientService,
    // For creating a mock back-end. You don't need these in a real app. 
    fakeBackendProvider,
    MockBackend
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const routingComponents = [AppComponent,LoginComponent,SignupComponent,NavigationComponent,HomeComponent,WelcomeComponent]
