import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShortenComponent } from '../components/shorten/shorten.component';
import { ShortenedComponent } from '../components/shortened/shortened.component';

const routes: Routes = [
  {
    path: '',
    component: ShortenComponent,
  },
  {
    path: 'short/:key',
    component: ShortenedComponent,
  },
  {
    path: 'short',
    component: ShortenedComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
