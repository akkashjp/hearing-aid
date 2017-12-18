import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashflowMiComponent } from './cashflow-mi.component';

describe('CashflowMiComponent', () => {
  let component: CashflowMiComponent;
  let fixture: ComponentFixture<CashflowMiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashflowMiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashflowMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
