import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrentiesComponent } from './warrenties.component';

describe('WarrentiesComponent', () => {
  let component: WarrentiesComponent;
  let fixture: ComponentFixture<WarrentiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarrentiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrentiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
