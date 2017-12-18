import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSendtocompComponent } from './stock-sendtocomp.component';

describe('StockSendtocompComponent', () => {
  let component: StockSendtocompComponent;
  let fixture: ComponentFixture<StockSendtocompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockSendtocompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSendtocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
