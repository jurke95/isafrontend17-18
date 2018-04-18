import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatreRepertoarComponent } from './theatre-repertoar.component';

describe('TheatreRepertoarComponent', () => {
  let component: TheatreRepertoarComponent;
  let fixture: ComponentFixture<TheatreRepertoarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheatreRepertoarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatreRepertoarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
