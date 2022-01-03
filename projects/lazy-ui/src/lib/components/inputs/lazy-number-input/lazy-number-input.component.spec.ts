import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LazyNumberInputComponent} from './lazy-number-input.component';

describe('LazyNumberInputComponent', () => {
  let component: LazyNumberInputComponent;
  let fixture: ComponentFixture<LazyNumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyNumberInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
