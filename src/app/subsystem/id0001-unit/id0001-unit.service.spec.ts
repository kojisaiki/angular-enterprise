import { TestBed, inject } from '@angular/core/testing';

import { Id0001UnitService } from './id0001-unit.service';

describe('Id0001UnitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Id0001UnitService]
    });
  });

  it('should be created', inject([Id0001UnitService], (service: Id0001UnitService) => {
    expect(service).toBeTruthy();
  }));
});
