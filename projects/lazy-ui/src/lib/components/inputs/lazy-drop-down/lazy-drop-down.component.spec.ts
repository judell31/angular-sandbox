import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LazyDropDownComponent} from './lazy-drop-down.component';

describe('LazyDropDownComponent', () => {
  let component: LazyDropDownComponent;
  let fixture: ComponentFixture<LazyDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyDropDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
