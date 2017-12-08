import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashflowReceivedComponent } from './cashflow-received.component';

describe('CashflowReceivedComponent', () => {
  let component: CashflowReceivedComponent;
  let fixture: ComponentFixture<CashflowReceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashflowReceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashflowReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
