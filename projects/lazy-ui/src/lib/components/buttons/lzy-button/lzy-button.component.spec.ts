import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LzyButtonComponent } from './lzy-button.component';

describe('LzyButtonComponent', () => {
  let component: LzyButtonComponent;
  let fixture: ComponentFixture<LzyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LzyButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LzyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
