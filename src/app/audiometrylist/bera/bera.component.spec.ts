import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeraComponent } from './bera.component';

describe('BeraComponent', () => {
  let component: BeraComponent;
  let fixture: ComponentFixture<BeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
