import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlService } from 'src/app/services/url.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-shortened',
  templateUrl: './shortened.component.html',
  styleUrls: ['./shortened.component.scss'],
})
export class ShortenedComponent implements OnInit {
  urlKey: string;
  originalUrl: string;
  enteredKey: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private urlService: UrlService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.urlKey = params['key'];
      console.log(this.urlKey);
      if (this.urlKey) {
        this.urlService.getOriginalUrl(this.urlKey).subscribe(
          (data: any) => {
            this.originalUrl = data.originalURL;
            console.log(this.originalUrl);
          },
          (error) => {
            Swal.fire({
              title: 'Error',
              text: 'Invalid URL',
              icon: 'error',
            });
            this.router.navigate(['/']);
          }
        );
      }
    });
  }
  visit() {
    window.location.href = this.originalUrl;
  }
  ngOnInit(): void {}
  getURL() {
    this.urlService.getOriginalUrl(this.enteredKey).subscribe(
      (data: any) => {
        this.originalUrl = data.originalURL;
        window.location.href = this.originalUrl;
      },
      (error) => {
        Swal.fire({
          title: 'Error',
          text: 'Invalid URL',
          icon: 'error',
        });
      }
    );
  }
}
