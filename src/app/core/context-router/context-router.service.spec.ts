import { TestBed, inject } from '@angular/core/testing';

import { ContextRouterService } from './context-router.service';

describe('ContextRouterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContextRouterService]
    });
  });

  it('should be created', inject([ContextRouterService], (service: ContextRouterService) => {
    expect(service).toBeTruthy();
  }));
});
