import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddadComponent } from './addad.component';

describe('AddadComponent', () => {
  let component: AddadComponent;
  let fixture: ComponentFixture<AddadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
