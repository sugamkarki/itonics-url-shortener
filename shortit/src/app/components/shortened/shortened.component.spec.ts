import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenedComponent } from './shortened.component';

describe('ShortenedComponent', () => {
  let component: ShortenedComponent;
  let fixture: ComponentFixture<ShortenedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortenedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortenedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
