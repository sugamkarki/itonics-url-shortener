import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
const IMPORTS_ARRAY = [MatButtonModule, MatProgressSpinnerModule];
@NgModule({
  exports: IMPORTS_ARRAY,
})
export class MaterialModule {}
