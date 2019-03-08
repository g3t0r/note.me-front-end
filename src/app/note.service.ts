import { BASE_URI_PROD } from './uri-constans';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  baseUri = BASE_URI_PROD;

  getNotesFromUser(page: number, size: number = 20) {
    const user = localStorage.getItem('user');
    return this.http.get(
      `${this.baseUri}/api/users/${user}/notes?page=${page}&size=${size}`
    );
  }

  getNoteById(id: number) {
    const user = localStorage.getItem('user');
    return this.http.get(`${this.baseUri}/api/users/${user}/notes/${id}`);
  }

  newNote(note: Note) {
    const user = localStorage.getItem('user');
    const headers = new HttpHeaders();
    return this.http.post(`${this.baseUri}/api/users/${user}/notes`, note, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response'
    });
  }
  updateNote(id: number, updates: Map<string, string>) {
    const user = localStorage.getItem('user');
    const headers = new HttpHeaders();
    const updatesJson = JSON.stringify(
      Array.from(updates.entries()).reduce((o, [key, value]) => {
        o[key] = value;
        return o;
      }, {})
    );

    return this.http.patch(
      `${this.baseUri}/api/users/${user}/notes/${id}`,
      updatesJson,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        observe: 'response'
      }
    );
  }

  deleteNote(id: number) {
    const user = localStorage.getItem('user');
    return this.http.delete(`${this.baseUri}/api/users/${user}/notes/${id}`, {
      observe: 'response'
    });
  }

  constructor(private http: HttpClient) {}
}
