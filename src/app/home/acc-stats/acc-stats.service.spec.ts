import { TestBed } from '@angular/core/testing';

import { AccStatsService } from './acc-stats.service';

describe('AccStatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccStatsService = TestBed.get(AccStatsService);
    expect(service).toBeTruthy();
  });
});
