import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcashComponent } from './newcash.component';

describe('NewcashComponent', () => {
  let component: NewcashComponent;
  let fixture: ComponentFixture<NewcashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
