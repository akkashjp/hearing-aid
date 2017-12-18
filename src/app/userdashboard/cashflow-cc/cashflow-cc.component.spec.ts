import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashflowCcComponent } from './cashflow-cc.component';

describe('CashflowCcComponent', () => {
  let component: CashflowCcComponent;
  let fixture: ComponentFixture<CashflowCcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashflowCcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashflowCcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
