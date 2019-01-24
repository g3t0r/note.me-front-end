import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';


const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {

    constructor(private http: HttpClient) { }

    register(login, email, password): Observable<HttpResponse<Object>> {
        const formData = `login=${login}&email=${email}&password=${password}`;
        console.log(formData);
        return this.http.post('/register', formData, { headers, observe: 'response' });
    }

}
