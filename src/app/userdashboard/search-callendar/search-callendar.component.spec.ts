import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCallendarComponent } from './search-callendar.component';

describe('SearchCallendarComponent', () => {
  let component: SearchCallendarComponent;
  let fixture: ComponentFixture<SearchCallendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCallendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCallendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
