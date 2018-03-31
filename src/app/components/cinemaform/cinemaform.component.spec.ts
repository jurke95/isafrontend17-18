import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaformComponent } from './cinemaform.component';

describe('CinemaformComponent', () => {
  let component: CinemaformComponent;
  let fixture: ComponentFixture<CinemaformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
