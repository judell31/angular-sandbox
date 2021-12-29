import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyBackStepperButtonComponent } from './lazy-back-stepper-button.component';

describe('LzyBackStepperButtonComponent', () => {
  let component: LazyBackStepperButtonComponent;
  let fixture: ComponentFixture<LazyBackStepperButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyBackStepperButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyBackStepperButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
