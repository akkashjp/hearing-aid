import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcasehistoryComponent } from './newcasehistory.component';

describe('NewcasehistoryComponent', () => {
  let component: NewcasehistoryComponent;
  let fixture: ComponentFixture<NewcasehistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcasehistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcasehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
