import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShortenComponent } from '../components/shorten/shorten.componentt';

const routes: Routes = [
  {
    path: '',
    component: ShortenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
