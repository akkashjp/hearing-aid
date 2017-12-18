import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OaeComponent } from './oae.component';

describe('OaeComponent', () => {
  let component: OaeComponent;
  let fixture: ComponentFixture<OaeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OaeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
