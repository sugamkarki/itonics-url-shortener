import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  constructor(private http: HttpClient) {}
  create(url: string) {
    return this.http.post('/api/urls', { originalURL: url });
  }
  getOriginalUrl(key: string) {
    return this.http.get(`api/urls/${key}`);
  }
}
