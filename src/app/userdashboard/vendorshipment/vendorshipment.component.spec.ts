import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorshipmentComponent } from './vendorshipment.component';

describe('VendorshipmentComponent', () => {
  let component: VendorshipmentComponent;
  let fixture: ComponentFixture<VendorshipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorshipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorshipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
