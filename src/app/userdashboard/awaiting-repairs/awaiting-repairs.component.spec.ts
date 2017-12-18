import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwaitingRepairsComponent } from './awaiting-repairs.component';

describe('AwaitingRepairsComponent', () => {
  let component: AwaitingRepairsComponent;
  let fixture: ComponentFixture<AwaitingRepairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwaitingRepairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwaitingRepairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
