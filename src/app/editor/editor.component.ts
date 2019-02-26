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

  constructor() {}

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
