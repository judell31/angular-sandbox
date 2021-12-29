import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyFileInputComponent } from './lazy-file-input.component';

describe('FileInputComponent', () => {
  let component: LazyFileInputComponent;
  let fixture: ComponentFixture<LazyFileInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyFileInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyFileInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
