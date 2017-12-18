import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwaitingPosComponent } from './awaiting-pos.component';

describe('AwaitingPosComponent', () => {
  let component: AwaitingPosComponent;
  let fixture: ComponentFixture<AwaitingPosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwaitingPosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwaitingPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
