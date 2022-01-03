import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LazyNextStepperButtonComponent} from './lazy-next-stepper-button.component';

describe('LzyNextStepperButtonComponent', () => {
  let component: LazyNextStepperButtonComponent;
  let fixture: ComponentFixture<LazyNextStepperButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyNextStepperButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyNextStepperButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
