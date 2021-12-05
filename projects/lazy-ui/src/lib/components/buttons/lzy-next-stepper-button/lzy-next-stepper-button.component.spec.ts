import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LzyNextStepperButtonComponent } from './lzy-next-stepper-button.component';

describe('LzyNextStepperButtonComponent', () => {
  let component: LzyNextStepperButtonComponent;
  let fixture: ComponentFixture<LzyNextStepperButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LzyNextStepperButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LzyNextStepperButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
