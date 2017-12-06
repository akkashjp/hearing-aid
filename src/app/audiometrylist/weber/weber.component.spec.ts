import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeberComponent } from './weber.component';

describe('WeberComponent', () => {
  let component: WeberComponent;
  let fixture: ComponentFixture<WeberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
