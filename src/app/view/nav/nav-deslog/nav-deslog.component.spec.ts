import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDeslogComponent } from './nav-deslog.component';

describe('NavDeslogComponent', () => {
  let component: NavDeslogComponent;
  let fixture: ComponentFixture<NavDeslogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavDeslogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDeslogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
