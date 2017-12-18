import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcasehistorydetailComponent } from './newcasehistorydetail.component';

describe('NewcasehistorydetailComponent', () => {
  let component: NewcasehistorydetailComponent;
  let fixture: ComponentFixture<NewcasehistorydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcasehistorydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcasehistorydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
