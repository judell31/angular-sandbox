import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LzyBackStepperButtonComponent } from './lzy-back-stepper-button.component';

describe('LzyBackStepperButtonComponent', () => {
  let component: LzyBackStepperButtonComponent;
  let fixture: ComponentFixture<LzyBackStepperButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LzyBackStepperButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LzyBackStepperButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
