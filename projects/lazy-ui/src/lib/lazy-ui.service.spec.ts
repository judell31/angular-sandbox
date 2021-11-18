import {TestBed} from '@angular/core/testing';

import {LazyUiService} from './lazy-ui.service';

describe('LazyUiService', () => {
  let service: LazyUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazyUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
