import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesTrialsComponent } from './sales-trials.component';

describe('SalesTrialsComponent', () => {
  let component: SalesTrialsComponent;
  let fixture: ComponentFixture<SalesTrialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTrialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTrialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
