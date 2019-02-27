import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  getNotesFromUser(page: number, size: number = 20) {
    const user = localStorage.getItem('user');
    return this.http.get(
      `http://localhost:8080/api/users/${user}/notes?page=${page}&size=${size}`
    );
  }

  newNote(note: Note) {
    const user = localStorage.getItem('user');
    const headers = new HttpHeaders();
    return this.http.post(
      `http://localhost:8080/api/users/${user}/notes`,
      note,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        observe: 'response'
      }
    );
  }

  constructor(private http: HttpClient) {}
}
