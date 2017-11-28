import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EodtallyComponent } from './eodtally.component';

describe('EodtallyComponent', () => {
  let component: EodtallyComponent;
  let fixture: ComponentFixture<EodtallyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EodtallyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EodtallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
