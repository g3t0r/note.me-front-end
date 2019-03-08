import { NoteService } from './../note.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  edited = false;
  new = false;
  note = new Note();
  titleChanged = false;
  contentChanged = false;
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
      this.location.back();
    });
  }

  updateNote() {
    const updates = new Map<string, string>();
    const id = +this.route.snapshot.paramMap.get('id');
    if (this.titleChanged) {
      updates.set('title', this.formGroup.controls.title.value);
    }
    if (this.contentChanged) {
      updates.set('content', this.formGroup.controls.content.value);
    }
    console.log(updates);
    this.noteService.updateNote(id, updates).subscribe(response => {
      console.log(response.status);
      this.location.back();
    });
  }

  deleteNote() {
    const id = +this.route.snapshot.paramMap.get('id');
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: { sureToDelete: Boolean }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        console.log(result);
        this.noteService.deleteNote(id).subscribe(response => {
          console.log(response.status);
          this.location.back();
        });
      }
    });
  }

  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id == 0) {
      this.note = new Note();
      this.note.title = '';
      this.note.content = '';
      this.new = true;
    } else {
      this.noteService
        .getNoteById(id)
        .subscribe((note: Note) => (this.note = note));
    }

    this.formGroup.controls.title.valueChanges.subscribe(() => {
      this.edited = true;
      this.titleChanged = true;
    });

    this.formGroup.controls.content.valueChanges.subscribe(() => {
      this.edited = true;
      this.contentChanged = true;
    });
  }
}
