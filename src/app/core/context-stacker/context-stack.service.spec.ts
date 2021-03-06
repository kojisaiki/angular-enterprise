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
      const newpage = new PageContext('/id0001/:id', {
        list: [
          { name: 'username', value: 'taro' },
          { name: 'age', value: 123 },
        ],
      });

      expect(stacker.getHeight()).toEqual(0);
      stacker.stack(newpage);
      expect(stacker.getHeight()).toEqual(1);

      const contains = stacker.contains('/id0001/:id');
      expect(contains).toBeTruthy();

      const getpage = stacker.takeOff('/id0001/:id');
      expect(getpage).not.toBeNull();
      expect(getpage.contextId).toEqual('/id0001/:id');
    },
  ));

  it('multi stack and takeoff on top', inject(
    [ContextStackService],
    (stacker: ContextStackService) => {
      const firstPage = new PageContext('/id0001/', { type: 'list' });
      const secondPage = new PageContext('/id0001/:id', { type: 'card' });

      expect(stacker.getHeight()).toEqual(0);
      stacker.stack(firstPage);
      stacker.stack(secondPage);
      expect(stacker.getHeight()).toEqual(2);

      const subject = stacker.takeOff('/id0001/:id');
      expect(subject).not.toBeNull();
      expect(subject.contextId).toEqual('/id0001/:id');
      expect(stacker.getHeight()).toEqual(2);
    },
  ));

  it('multi stack and takeoff on middle', inject(
    [ContextStackService],
    (stacker: ContextStackService) => {
      const firstPage = new PageContext('/id0001/', { type: 'list' });
      const secondPage = new PageContext('/id0001/:id', { type: 'card' });
      const thirdPage = new PageContext('/id0002/:id', { type: 'card' });

      expect(stacker.getHeight()).toEqual(0);
      stacker.stack(firstPage);
      stacker.stack(secondPage);
      stacker.stack(thirdPage);
      expect(stacker.getHeight()).toEqual(3);

      const subject = stacker.takeOff('/id0001/:id');
      expect(subject).not.toBeNull();
      expect(subject.contextId).toEqual('/id0001/:id');
      expect(stacker.getHeight()).toEqual(2);
    },
  ));

  it('context not found in empty stack', inject(
    [ContextStackService],
    (stacker: ContextStackService) => {
      expect(stacker.getHeight()).toEqual(0);
      const subject = stacker.takeOff('/id0001/');

      expect(subject).toBeNull();
      expect(stacker.getHeight()).toEqual(0);
    },
  ));

  it('context not found in many stack', inject(
    [ContextStackService],
    (stacker: ContextStackService) => {
      const firstPage = new PageContext('/id0001/', { type: 'list' });
      const secondPage = new PageContext('/id0001/:id', { type: 'card' });

      stacker.stack(firstPage);
      stacker.stack(secondPage);
      expect(stacker.getHeight()).toEqual(2);

      const subject = stacker.takeOff('/id0002/');

      expect(subject).toBeNull();
      expect(stacker.getHeight()).toEqual(0);
    },
  ));
});
