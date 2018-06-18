import { PageContext } from './page-context';
import { TestBed, inject } from '@angular/core/testing';

import { ContextStackService } from './context-stack.service';

describe('ContextStackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContextStackService],
    });
  });

  it('one stack and takeoff', inject(
    [ContextStackService],
    (stacker: ContextStackService) => {
      const newpage = new PageContext();
      newpage.contextId = '/id0001/:id';
      newpage.data = {
        list: [
          { name: 'username', value: 'taro' },
          { name: 'age', value: 123 },
        ],
      };

      expect(stacker.getHeight()).toEqual(0);
      stacker.stack(newpage);
      expect(stacker.getHeight()).toEqual(1);

      const getpage = stacker.takeOff('/id0001/:id');
      expect(getpage).not.toBeNull();
      expect(getpage.contextId).toEqual('/id0001/:id');
    },
  ));

  it('multi stack and takeoff on top', inject(
    [ContextStackService],
    (stacker: ContextStackService) => {
      // TODO:
      expect(stacker.getHeight()).toEqual(0);
    },
  ));

  it('multi stack and takeoff on middle', inject(
    [ContextStackService],
    (stacker: ContextStackService) => {
      // TODO:
      expect(stacker.getHeight()).toEqual(0);
    },
  ));

  it('context not found in empty stack', inject(
    [ContextStackService],
    (stacker: ContextStackService) => {
      // TODO:
      expect(stacker.getHeight()).toEqual(0);
    },
  ));

  it('context not found in many stack', inject(
    [ContextStackService],
    (stacker: ContextStackService) => {
      // TODO:
      expect(stacker.getHeight()).toEqual(0);
    },
  ));
});
