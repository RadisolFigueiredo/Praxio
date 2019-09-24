import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDeslogComponent } from './footer-deslog.component';

describe('FooterDeslogComponent', () => {
  let component: FooterDeslogComponent;
  let fixture: ComponentFixture<FooterDeslogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterDeslogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterDeslogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
