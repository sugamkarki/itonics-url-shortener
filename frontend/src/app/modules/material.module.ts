import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MatDividerModule } from '@angular/material/divider';

const IMPORT_ARRAY = [
  MatButtonModule,
  SweetAlert2Module.forRoot(),
  MatRippleModule,
  MatProgressSpinnerModule,
  MatDividerModule,
];
@NgModule({
  exports: [IMPORT_ARRAY],
})
export class MaterialModule {}
