import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';

// import { ForgotPasswordComponent } from './containers/forgot-password/forgot-password.component';
import { SigninComponent } from './containers/signin/signin.component';
import {SignupComponent} from "./containers/signup/signup.component";
import {ForgotPasswordComponent} from "./containers/forgot-password/forgot-password.component";
// import { SignupComponent } from './containers/signup/signup.component';
// import { GuestGuard } from './guards/guest.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    // canActivate: [GuestGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login'
      },
      {
        path: 'login',
        component: SigninComponent,
        // canActivate: [GuestGuard]
      },
      {
        path: 'register',
        component: SignupComponent,
        // canActivate: [GuestGuard]
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        // canActivate: [GuestGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
