import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockStandbyComponent } from './stock-standby.component';

describe('StockStandbyComponent', () => {
  let component: StockStandbyComponent;
  let fixture: ComponentFixture<StockStandbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockStandbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockStandbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
