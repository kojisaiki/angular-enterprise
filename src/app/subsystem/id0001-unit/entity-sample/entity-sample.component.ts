import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-entity-sample',
  templateUrl: './entity-sample.component.html',
  styleUrls: ['./entity-sample.component.scss']
})
export class EntitySampleComponent implements OnInit, OnDestroy {
  // #reion インタフェース

  // #endregion

  // #region コンストラクタ・ライフサイクル

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscriptions.push(
      activatedRoute.paramMap.subscribe(param => {
        this.id = param.get('id');
      })
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  // #endregion

  // #region ビューバインド

  getId() {
    return this.id;
  }

  // #endregion

  // #region イベント

  // #endregion

  // #region プライベート

  private id: string;
  private subscriptions: Subscription[] = [];

  // #endregion
}
