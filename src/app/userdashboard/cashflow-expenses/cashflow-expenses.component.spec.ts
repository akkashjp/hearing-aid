import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashflowExpensesComponent } from './cashflow-expenses.component';

describe('CashflowExpensesComponent', () => {
  let component: CashflowExpensesComponent;
  let fixture: ComponentFixture<CashflowExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashflowExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashflowExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
