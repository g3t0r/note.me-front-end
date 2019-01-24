import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(login: string, password: string): Observable<HttpResponse<Object>> {
    const formData = `username=${login}&password=${password}`;
    return this
      .http
      .post('/login', formData,
        { headers, observe: 'response' });
  }
}
