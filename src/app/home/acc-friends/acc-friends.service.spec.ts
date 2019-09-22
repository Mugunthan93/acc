import { TestBed } from '@angular/core/testing';

import { AccFriendsService } from './acc-friends.service';

describe('AccFriendsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccFriendsService = TestBed.get(AccFriendsService);
    expect(service).toBeTruthy();
  });
});
