import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UrlService {
  constructor(private http: HttpClient) {}
  create(url: string) {
    return this.http.post(`${environment.API_URL}/urls`, { originalURL: url });
  }
  getOriginalUrl(key: string) {
    return this.http.get(`${environment.API_URL}/urls/${key}`);
  }
}
