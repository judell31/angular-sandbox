import {TestBed} from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {AppComponent} from "../../../../../../src/app/app.component";

describe('NumbersOnlyDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create an instance', () => {
    // const directive = new NumbersDirective();
    // expect(directive).toBeTruthy();
  });
});
