import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaReservationComponent } from './cinema-reservation.component';

describe('CinemaReservationComponent', () => {
  let component: CinemaReservationComponent;
  let fixture: ComponentFixture<CinemaReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
