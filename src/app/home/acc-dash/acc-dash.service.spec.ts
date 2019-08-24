import { TestBed } from '@angular/core/testing';

import { AccDashService } from './acc-dash.service';

describe('AccDashService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccDashService = TestBed.get(AccDashService);
    expect(service).toBeTruthy();
  });
});
