import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  login = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  status: string;

  ngOnInit() {
  }

  onsubmit() {
    console.log(`${this.login.value}:${this.password.value}`);
    this
      .loginService
      .login(this.login.value, this.password.value)
      .subscribe(
        (resp) => {
          status = resp.status.toString();
          console.log(status);
          if (status === '200') {
            this.router.navigate(['/pinboard']);
          }
        },
        (error) => {
          this.status = error.status.toString();
          console.log('xd');
          console.log(this.status);
        }
      );
  }

}
