import { ChangeDetectorRef, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shortit';
  loading$: Observable<boolean>;
  constructor(public loader: LoadingService, private cdr: ChangeDetectorRef) {}
  ngAfterContentChecked() {
    this.loading$ = this.loader.loading$;
    this.cdr.detectChanges();
  }
}
