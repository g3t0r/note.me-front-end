import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  formRegistration = new FormGroup({
    login: new FormControl('', Validators.required),
    email: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    password: new FormControl('', Validators.required)
  });

  usernameTaken = false;

  constructor(
    private registrationService: RegistrationService,
    private router: Router
  ) {}

  ngOnInit() {}

  onsubmit() {
    this.registrationService
      .register(
        this.formRegistration.controls.login.value,
        this.formRegistration.controls.email.value,
        this.formRegistration.controls.password.value
      )
      .subscribe(
        resp => {
          console.log(resp.status.toString());
          if (resp.status.toString() === '201') {
            this.router.navigate(['/login']);
          }
        },
        error => {
          if (error.status.toString() === '409') {
            this.usernameTaken = true;
          }
        }
      );
    return false;
  }

  anyFieldInvalid(): boolean {
    return this.formRegistration.invalid;
  }
}
