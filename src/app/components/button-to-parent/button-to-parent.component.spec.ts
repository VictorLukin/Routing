import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToParentComponent } from './button-to-parent.component';

describe('ButtomToParentComponent', () => {
  let component: ButtonToParentComponent;
  let fixture: ComponentFixture<ButtonToParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonToParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonToParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
