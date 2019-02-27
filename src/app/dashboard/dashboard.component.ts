import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  notes: Note[] = [];
  page = 0;
  logout() {
    localStorage.removeItem('jwt-token');
    this.router.navigate(['login']);
  }

  onScroll() {
    this.page++;
    this.addNotes();
    console.log('+5');
  }

  addNotes(): void {
    this.noteService.getNotesFromUser(this.page).subscribe((result: any) => {
      result.content.forEach(note => {
        this.notes.push(note);
      });
    });
  }

  constructor(private router: Router, private noteService: NoteService) {}

  ngOnInit() {
    this.addNotes();
  }
}
