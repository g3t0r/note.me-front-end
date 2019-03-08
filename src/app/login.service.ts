import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LOGIN_URI_PROD } from './uri-constans';

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(login: string, password: string): Observable<HttpResponse<Object>> {
    const body = {
      login: login,
      password: password
    };

    return this.http.post(LOGIN_URI_PROD, body, {
      headers,
      observe: 'response'
    });
  }
}
