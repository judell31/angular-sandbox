import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LazySingleFileInputComponent} from './lazy-single-file-input.component';

describe('FileInputComponent', () => {
  let component: LazySingleFileInputComponent;
  let fixture: ComponentFixture<LazySingleFileInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazySingleFileInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazySingleFileInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
