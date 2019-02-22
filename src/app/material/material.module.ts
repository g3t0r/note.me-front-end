import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatInputModule,
  MatDividerModule,
  MatRippleModule
} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatRippleModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatRippleModule
  ]
})
export class MaterialModule {}
