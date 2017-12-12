import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashflowChequesComponent } from './cashflow-cheques.component';

describe('CashflowChequesComponent', () => {
  let component: CashflowChequesComponent;
  let fixture: ComponentFixture<CashflowChequesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashflowChequesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashflowChequesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
