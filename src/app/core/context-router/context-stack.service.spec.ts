import { TestBed, inject } from '@angular/core/testing';

import { ContextStackService } from './context-stack.service';

describe('ContextStackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContextStackService]
    });
  });

  it('should be created', inject([ContextStackService], (service: ContextStackService) => {
    expect(service).toBeTruthy();
  }));
});
