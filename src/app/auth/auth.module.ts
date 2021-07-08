import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';

// import { NzAlertModule } from 'ng-zorro-antd/alert';
// import { NzButtonModule } from 'ng-zorro-antd/button';
// import { NzCardModule } from 'ng-zorro-antd/card';
// import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
// import { NzFormModule } from 'ng-zorro-antd/form';
// import { NzGridModule } from 'ng-zorro-antd/grid';
// import { NzIconModule } from 'ng-zorro-antd/icon';
// import { NzInputModule } from 'ng-zorro-antd/input';

import { AuthRoutingModule } from './auth-routing.module';
// import { PasswordStrengthBarComponent } from './components/password-strength-bar/password-strength-bar.component';
// import { ForgotPasswordComponent } from './containers/forgot-password/forgot-password.component';
import { SigninComponent } from './containers/signin/signin.component';
// import { SignupComponent } from './containers/signup/signup.component';
import { AuthComponent } from './auth.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {SignupComponent} from "./containers/signup/signup.component";
import {ForgotPasswordComponent} from "./containers/forgot-password/forgot-password.component";
import {SharedModule} from "../shared/shared.module";
// import * as fromAuth from './store/reducers';


@NgModule({
  declarations: [AuthComponent, SigninComponent, SignupComponent, ForgotPasswordComponent], // PasswordStrengthBarComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AuthRoutingModule,
    // StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.authReducer),
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
// export class AuthModule {};
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
      return {
          ngModule: AuthModule,
          providers: [
            // ActivatedRouteSnapshot
            // AuthService,
            //   AuthGuard
          ]
      };
  }
}
