import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcinemaComponent } from './addcinema.component';

describe('AddcinemaComponent', () => {
  let component: AddcinemaComponent;
  let fixture: ComponentFixture<AddcinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
