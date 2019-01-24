import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  constructor(private registrationService: RegistrationService, private router: Router) { }

  loginError = false;
  passwordError = false;
  matcher = new MyErrorStateMatcher();
  login = new FormControl('', Validators.required);
  email = new FormControl('', Validators.compose([Validators.required, Validators.email]));
  password = new FormControl('', Validators.required);

  ngOnInit(): void {
  }

  onsubmit() {
    this
      .registrationService
      .register(this.login.value, this.email.value, this.password.value)
      .subscribe(
        resp => {
          resp.status.toString();
          if (resp.status.toString() === '200') {
            this.router.navigate(['/login']);
          }
        }
      );
    return false;
  }

}
