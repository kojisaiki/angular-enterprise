import { TestBed, inject } from '@angular/core/testing';

import { BehaviorStoreService } from './behavior-store.service';

describe('BehaviorStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BehaviorStoreService]
    });
  });

  it('should be created', inject([BehaviorStoreService], (service: BehaviorStoreService) => {
    expect(service).toBeTruthy();
  }));
});
