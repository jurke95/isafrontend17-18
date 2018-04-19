import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatreReservationComponent } from './theatre-reservation.component';

describe('TheatreReservationComponent', () => {
  let component: TheatreReservationComponent;
  let fixture: ComponentFixture<TheatreReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheatreReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatreReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
