import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefhistoryComponent } from './briefhistory.component';

describe('BriefhistoryComponent', () => {
  let component: BriefhistoryComponent;
  let fixture: ComponentFixture<BriefhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BriefhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
