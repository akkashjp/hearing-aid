import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTransferreqComponent } from './stock-transferreq.component';

describe('StockTransferreqComponent', () => {
  let component: StockTransferreqComponent;
  let fixture: ComponentFixture<StockTransferreqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTransferreqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTransferreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
