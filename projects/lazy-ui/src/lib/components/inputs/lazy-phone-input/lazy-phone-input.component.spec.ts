import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyPhoneInputComponent } from './lazy-phone-input.component';

describe('LazyPhoneInputComponent', () => {
  let component: LazyPhoneInputComponent;
  let fixture: ComponentFixture<LazyPhoneInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyPhoneInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyPhoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
