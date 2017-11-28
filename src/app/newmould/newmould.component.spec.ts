import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmouldComponent } from './newmould.component';

describe('NewmouldComponent', () => {
  let component: NewmouldComponent;
  let fixture: ComponentFixture<NewmouldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmouldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmouldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
