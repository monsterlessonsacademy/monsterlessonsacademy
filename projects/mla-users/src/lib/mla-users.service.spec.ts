import { TestBed } from '@angular/core/testing';

import { MlaUsersService } from './mla-users.service';

describe('MlaUsersService', () => {
  let service: MlaUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MlaUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
