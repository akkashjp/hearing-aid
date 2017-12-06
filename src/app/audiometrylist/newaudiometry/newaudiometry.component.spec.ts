import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewaudiometryComponent } from './newaudiometry.component';

describe('NewaudiometryComponent', () => {
  let component: NewaudiometryComponent;
  let fixture: ComponentFixture<NewaudiometryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewaudiometryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewaudiometryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
