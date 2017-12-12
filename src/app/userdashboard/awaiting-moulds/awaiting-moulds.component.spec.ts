import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwaitingMouldsComponent } from './awaiting-moulds.component';

describe('AwaitingMouldsComponent', () => {
  let component: AwaitingMouldsComponent;
  let fixture: ComponentFixture<AwaitingMouldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwaitingMouldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwaitingMouldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
