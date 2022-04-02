import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-shorten',
  templateUrl: './shorten.component.html',
  styleUrls: ['./shorten.component.scss'],
})
export class ShortenComponent implements OnInit {
  myUrl: string = '';
  protocol: string = '';
  protocols = [
    {
      name: 'HTTPS',
      value: 'https://',
    },
    {
      name: 'HTTP',
      value: 'http://',
    },
  ];
  constructor(private urlService: UrlService) {}

  ngOnInit(): void {}
  shortenURL() {
    const finalURL = this.protocol + this.myUrl;
  }
}
