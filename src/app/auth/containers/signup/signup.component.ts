import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  // isLoading = false;
  // passwordVisible = false;
  // validateForm: FormGroup;
  //
  // submitForm(value: { email: string; password: string; confirm: string; }): void {
  //   this.isLoading = true;
  //
  //   // tslint:disable-next-line: forin
  //   for (const key in this.validateForm.controls) {
  //     this.validateForm.controls[key].markAsDirty();
  //     this.validateForm.controls[key].updateValueAndValidity();
  //   }
  //   console.log(value);
  // }
  //
  // resetForm(e: MouseEvent): void {
  //   e.preventDefault();
  //   this.validateForm.reset();
  //   // tslint:disable-next-line: forin
  //   for (const key in this.validateForm.controls) {
  //     this.validateForm.controls[key].markAsPristine();
  //     this.validateForm.controls[key].updateValueAndValidity();
  //   }
  // }
  //
  // validateConfirmPassword(): void {
  //   setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  // }
  //
  // // userNameAsyncValidator = (control: FormControl) =>
  // //   new Observable((observer: Observer<ValidationErrors | null>) => {
  // //     setTimeout(() => {
  // //       if (control.value === 'JasonWood') {
  // //         // you have to return `{error: true}` to mark it as an error event
  // //         observer.next({ error: true, duplicated: true });
  // //       } else {
  // //         observer.next(null);
  // //       }
  // //       observer.complete();
  // //     }, 1000);
  // //   });
  //
  // confirmValidator = (control: FormControl): { [s: string]: boolean } => {
  //   if (!control.value) {
  //     return { error: true, required: true };
  //   } else if (control.value !== this.validateForm.controls.password.value) {
  //     return { confirm: true, error: true };
  //   }
  //   return {};
  // }
  //
  // constructor(private fb: FormBuilder) {
  //   this.validateForm = this.fb.group({
  //     // userName: ['', [Validators.required], [this.userNameAsyncValidator]],
  //     email: ['', [
  //       Validators.required,
  //       Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  //     ]],
  //     password: ['', [Validators.required]],
  //     confirm: ['', [this.confirmValidator]],
  //     // comment: ['', [Validators.required]]
  //   });
  // }
  //
  // ngOnInit(): void {}

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
