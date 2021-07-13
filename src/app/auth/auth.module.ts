import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './containers/signin/signin.component';
import { AuthComponent } from './auth.component';
import {SignupComponent} from "./containers/signup/signup.component";
import {ForgotPasswordComponent} from "./containers/forgot-password/forgot-password.component";
import {SharedModule} from "../shared/shared.module";
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [AuthComponent, SigninComponent, SignupComponent, ForgotPasswordComponent], // PasswordStrengthBarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AuthRoutingModule,
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ErrorIntercept,
    //   multi: true
    // },
  ],
  // bootstrap: [AuthComponent]
})
// export class AuthModule {}
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
      return {
          ngModule: AuthModule,
          providers: [
            // ActivatedRouteSnapshot
            // AuthService,
              // AuthGuard
          ]
      };
  }
}
