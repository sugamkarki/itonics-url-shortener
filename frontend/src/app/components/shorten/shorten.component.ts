import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shorten',
  templateUrl: './shorten.component.html',
  styleUrls: ['./shorten.component.scss'],
})
export class ShortenComponent implements OnInit {
  url: string;
  constructor() {}
  ngOnInit(): void {}
}
