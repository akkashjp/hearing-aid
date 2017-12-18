import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesProcessingComponent } from './sales-processing.component';

describe('SalesProcessingComponent', () => {
  let component: SalesProcessingComponent;
  let fixture: ComponentFixture<SalesProcessingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesProcessingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
