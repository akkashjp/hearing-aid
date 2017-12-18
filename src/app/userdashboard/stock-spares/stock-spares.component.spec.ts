import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSparesComponent } from './stock-spares.component';

describe('StockSparesComponent', () => {
  let component: StockSparesComponent;
  let fixture: ComponentFixture<StockSparesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockSparesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSparesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
