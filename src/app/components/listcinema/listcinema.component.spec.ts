import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcinemaComponent } from './listcinema.component';

describe('ListcinemaComponent', () => {
  let component: ListcinemaComponent;
  let fixture: ComponentFixture<ListcinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
