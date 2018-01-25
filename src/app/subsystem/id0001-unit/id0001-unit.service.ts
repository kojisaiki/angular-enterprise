import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class Id0001UnitService {

  // #reion インタフェース

  constructor() { }

  getList() {
    return this.currentList$.value;
  }

  request() {
    const mockList: any[] = [
      {
        id: '1',
        name: 'ginko'
      },
      {
        id: '2',
        name: 'ruru'
      },
      {
        id: '3',
        name: 'kureha'
      }
    ];
    this.currentList$.next(mockList);
  }

  // #endregion

  // #region プライベート

  private currentList$: BehaviorSubject<any[]> = new BehaviorSubject([]);

  // #endregion

}
