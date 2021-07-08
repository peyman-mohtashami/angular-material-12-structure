import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { catchError, tap } from 'rxjs/operators';
// import { AuthState } from '../../reducers';
// import { AuthService } from '../../services/auth.service';
// import { noop } from 'rxjs';

// const RETURN_URL = 'return_url';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  // error: string | undefined;
  // isLoading = false;
  // validateForm!: FormGroup;
  // returnUrl?: string;
  //
  // constructor(
  //   // private authService: AuthService,
  //   private router: Router,
  //   private fb: FormBuilder,
  //   private activatedRoute: ActivatedRoute
  // ) { }
  //
  // ngOnInit(): void {
  //   // this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  //   //
  //   this.validateForm = this.fb.group({
  //     email: [null, [
  //       Validators.required,
  //       Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  //     ]],
  //     password: [null, [
  //       Validators.required,
  //     ]],
  //     remember: [true]
  //   });
  // }
  //
  // submitForm(value: { email: string; password: string; remember: boolean; }): void {
  //   // this.isLoading = true;
  //   // // tslint:disable-next-line: forin
  //   // for (const i in this.validateForm.controls) {
  //   //   this.validateForm.controls[i].markAsDirty();
  //   //   this.validateForm.controls[i].updateValueAndValidity();
  //   // }
  //   //
  //   // this.authService.login(value.email, value.password).pipe(
  //   //   tap(user => {
  //   //     this.store.dispatch(setUser({user}));
  //   //     this.router.navigateByUrl(this.returnUrl || '/admin');
  //   //   })
  //   // ).subscribe(
  //   //     noop,
  //   //     err => {
  //   //       this.isLoading = false;
  //   //       return this.error = err.message;
  //   //     }
  //   //   );
  //   // // .pipe(
  //   // //   catchError(error => {
  //   // //     this.isLoading = false;
  //   // //     return this.error = error.message;
  //   // //   }),
  //   // //   // finalize(() => this.loading = false)
  //   // // )
  //   // // .subscribe(
  //   // //   () => {
  //   // //     console.log(89098)
  //   // // //     this.router.navigate(['/']);
  //   // // //     this.loading = false;
  //   // //   },
  //   // // //   (err) => {
  //   //
  //   // // //   }
  //   // // );
  // }

  form: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    // private authService: AuthService
  ) {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/game';

    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required],
      rememberMe: ['']
    });
  }

  async ngOnInit(): Promise<void> {
    // if (await this.authService.checkAuthenticated()) {
    //   await this.router.navigate([this.returnUrl]);
    // }
  }

  async onSubmit(): Promise<void> {
    // this.loginInvalid = false;
    // this.formSubmitAttempt = false;
    // if (this.form.valid) {
    //   try {
    //     const username = this.form.get('username')?.value;
    //     const password = this.form.get('password')?.value;
    //     await this.authService.login(username, password);
    //   } catch (err) {
    //     this.loginInvalid = true;
    //   }
    // } else {
    //   this.formSubmitAttempt = true;
    // }
  }


}
