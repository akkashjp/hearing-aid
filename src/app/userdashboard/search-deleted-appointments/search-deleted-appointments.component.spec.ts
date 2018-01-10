import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDeletedAppointmentsComponent } from './search-deleted-appointments.component';

describe('SearchDeletedAppointmentsComponent', () => {
  let component: SearchDeletedAppointmentsComponent;
  let fixture: ComponentFixture<SearchDeletedAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDeletedAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDeletedAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
