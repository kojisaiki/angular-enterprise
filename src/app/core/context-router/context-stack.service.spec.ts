import { PageContext } from './page-context';
import { TestBed, inject } from '@angular/core/testing';

import { ContextStackService } from './context-stack.service';

describe('ContextStackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContextStackService],
    });
  });

  it('stack and takeoff', inject(
    [ContextStackService],
    (service: ContextStackService) => {
      const newpage = new PageContext();
      newpage.contextId = '/id0001/:id';
      newpage.data = {
        list: [
          { name: 'username', value: 'taro' },
          { name: 'age', value: 123 },
        ],
      };

      service.stack(newpage);

      const getpage = service.takeOff('/id0001/:id');
      expect(getpage).not.toBeNull();
      expect(getpage.contextId).toEqual('/id0001/:id');
    },
  ));
});
