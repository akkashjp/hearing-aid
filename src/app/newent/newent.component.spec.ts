import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewentComponent } from './newent.component';

describe('NewentComponent', () => {
  let component: NewentComponent;
  let fixture: ComponentFixture<NewentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
