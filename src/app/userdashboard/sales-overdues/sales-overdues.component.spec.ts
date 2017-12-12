import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOverduesComponent } from './sales-overdues.component';

describe('SalesOverduesComponent', () => {
  let component: SalesOverduesComponent;
  let fixture: ComponentFixture<SalesOverduesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesOverduesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesOverduesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
