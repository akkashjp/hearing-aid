import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashflowDaybookComponent } from './cashflow-daybook.component';

describe('CashflowDaybookComponent', () => {
  let component: CashflowDaybookComponent;
  let fixture: ComponentFixture<CashflowDaybookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashflowDaybookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashflowDaybookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
