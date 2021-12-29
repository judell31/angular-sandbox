import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyButtonComponent } from './lazy-button.component';

describe('LzyButtonComponent', () => {
  let component: LazyButtonComponent;
  let fixture: ComponentFixture<LazyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
