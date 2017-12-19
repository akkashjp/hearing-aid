import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCreditsparesComponent } from './sales-creditspares.component';

describe('SalesCreditsparesComponent', () => {
  let component: SalesCreditsparesComponent;
  let fixture: ComponentFixture<SalesCreditsparesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesCreditsparesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesCreditsparesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
