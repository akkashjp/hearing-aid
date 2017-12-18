import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwaitingViaappordersComponent } from './awaiting-viaapporders.component';

describe('AwaitingViaappordersComponent', () => {
  let component: AwaitingViaappordersComponent;
  let fixture: ComponentFixture<AwaitingViaappordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwaitingViaappordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwaitingViaappordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
