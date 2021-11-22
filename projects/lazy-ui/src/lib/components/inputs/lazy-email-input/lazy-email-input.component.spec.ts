import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyEmailInputComponent } from './lazy-email-input.component';

describe('LazyEmailInputComponent', () => {
  let component: LazyEmailInputComponent;
  let fixture: ComponentFixture<LazyEmailInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyEmailInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyEmailInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
