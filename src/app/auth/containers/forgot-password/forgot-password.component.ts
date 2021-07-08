import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  // isLoading = false;
  // validateForm!: FormGroup;
  //
  // submitForm(): void {
  //   this.isLoading = true;
  //   // tslint:disable-next-line: forin
  //   for (const i in this.validateForm.controls) {
  //     this.validateForm.controls[i].markAsDirty();
  //     this.validateForm.controls[i].updateValueAndValidity();
  //   }
  // }
  //
  // constructor(private fb: FormBuilder) {}
  //
  // ngOnInit(): void {
  //   this.validateForm = this.fb.group({
  //     email: [null, [
  //       Validators.required,
  //       // Validators.minLength(6),
  //       Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  //     ]],
  //   });
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
