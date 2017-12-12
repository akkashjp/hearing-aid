import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesAllocatedComponent } from './sales-allocated.component';

describe('SalesAllocatedComponent', () => {
  let component: SalesAllocatedComponent;
  let fixture: ComponentFixture<SalesAllocatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesAllocatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesAllocatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
