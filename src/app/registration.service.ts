import { Injectable } from '@angular/core';
import {
  HttpHeaders,
  HttpClient,
  HttpParams,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { REGISTRATION_URI_DEV, REGISTRATION_URI_PROD } from './uri-constans';

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http: HttpClient) {}

  register(login, email, password): Observable<HttpResponse<Object>> {
    const body = {
      login: login,
      email: email,
      password: password
    };
    return this.http.post(REGISTRATION_URI_PROD, body, {
      headers,
      observe: 'response'
    });
  }
}
