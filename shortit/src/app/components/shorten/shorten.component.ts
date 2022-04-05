import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlService } from 'src/app/services/url.service';
import Swal from 'sweetalert2';
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
  constructor(private urlService: UrlService, private router: Router) {}

  ngOnInit(): void {}
  shortenURL() {
    const finalURL = this.protocol + this.myUrl;
    this.urlService.create(finalURL).subscribe(
      (data: any) => {
        console.log(data);
        Swal.fire({
          title: 'Shortened URL',
          text: data.shortURL,
          icon: 'success',
        });
        this.router.navigate(['short', data.shortURL]);
      },
      (error: HttpErrorResponse) => {
        Swal.fire({
          title: 'Error',
          text: error.error,
          icon: 'error',
        });
      }
    );
  }
}
