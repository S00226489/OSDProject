import { TestBed } from '@angular/core/testing';

import { DummystudentService } from './dummystudent.service';

describe('DummystudentService', () => {
  let service: DummystudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummystudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
