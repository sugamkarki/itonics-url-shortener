import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
const IMPORTS_ARRAY = [
  MatButtonModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  FormsModule,
  MatSelectModule,
];
@NgModule({
  exports: IMPORTS_ARRAY,
})
export class MaterialModule {}
