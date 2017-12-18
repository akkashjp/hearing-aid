import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SfaComponent } from './sfa.component';

describe('SfaComponent', () => {
  let component: SfaComponent;
  let fixture: ComponentFixture<SfaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SfaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
