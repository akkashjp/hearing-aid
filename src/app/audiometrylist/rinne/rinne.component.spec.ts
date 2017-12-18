import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RinneComponent } from './rinne.component';

describe('RinneComponent', () => {
  let component: RinneComponent;
  let fixture: ComponentFixture<RinneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RinneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RinneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
