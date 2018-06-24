import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PageContext } from '../../../core/context-stacker/page-context';
import { pageContextProvider } from '../../../core/context-router/context-router.service';

@Component({
  selector: 'app-entity-sample',
  templateUrl: './entity-sample.component.html',
  styleUrls: ['./entity-sample.component.scss'],
  providers: [pageContextProvider],
})
export class EntitySampleComponent implements OnInit, OnDestroy {
  // #reion インタフェース

  // #endregion

  // #region コンストラクタ・ライフサイクル

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private pageContext: PageContext,
  ) {
    console.log('context:');
    console.log(pageContext);
    this.subscriptions.push(
      activatedRoute.paramMap.subscribe(param => {
        this.id = param.get('id');
      }),
    );
  }

  ngOnInit(): void {
    // console.log('I am EntitySampleComponent.');
    // console.log(this.router);
    // console.log(this.activatedRoute);
  }

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
