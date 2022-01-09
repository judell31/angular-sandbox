import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyMultiFileInputComponent } from './lazy-multi-file-input.component';

describe('LazyMultiFileInputComponent', () => {
  let component: LazyMultiFileInputComponent;
  let fixture: ComponentFixture<LazyMultiFileInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyMultiFileInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyMultiFileInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
