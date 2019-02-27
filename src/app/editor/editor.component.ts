import { NoteService } from './../note.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  edited = false;
  new = true;
  note: Note;
  formGroup = new FormGroup({
    title: new FormControl(),
    content: new FormControl()
  });

  @Input() set noteToEdit(note: Note) {
    this.note = note;
  }

  addNote() {
    const note = new Note();
    note.title = this.formGroup.controls.title.value;
    note.content = this.formGroup.controls.content.value;
    console.log(note.title);
    console.log(note.content);
    this.noteService.newNote(note).subscribe(response => {
      console.log(response.status);
    });
    this.new = false;
    this.edited = false;
  }

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    if (this.note == null) {
      this.note = new Note();
      this.note.title = '';
      this.note.content = '';
      this.new = true;
    }

    this.formGroup.controls.title.valueChanges.subscribe(
      () => (this.edited = true)
    );

    this.formGroup.controls.content.valueChanges.subscribe(
      () => (this.edited = true)
    );
  }
}
