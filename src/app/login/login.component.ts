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
  constructor(private loginService: LoginService, private router: Router) {}

  login = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  status: string;

  ngOnInit() {}

  onsubmit() {
    this.loginService.login(this.login.value, this.password.value).subscribe(
      resp => {
        status = resp.status.toString();
        if (status === '200') {
          localStorage.setItem('jwt-token', resp.headers.get('Authorization'));
          let test = localStorage.getItem('jwt-token');
          test = test.split('.')[1];
          test = atob(test);
          const json = JSON.parse(test);
          test = json.sub;
          localStorage.setItem('user', test);
          this.router.navigate(['']);
        }
      },
      error => {
        this.status = error.status.toString();
        console.log('xd');
        console.log(this.status);
      }
    );
  }
}
