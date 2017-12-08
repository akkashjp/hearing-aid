import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisiComponent } from './sisi.component';

describe('SisiComponent', () => {
  let component: SisiComponent;
  let fixture: ComponentFixture<SisiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
