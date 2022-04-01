import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NetworkInterceptor } from './interceptors/network.interceptor';
import { ShortenComponent } from './components/shorten/shorten.component';

@NgModule({
  declarations: [AppComponent, ShortenComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptor,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
