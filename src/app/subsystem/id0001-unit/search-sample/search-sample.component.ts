import { Component, OnInit } from '@angular/core';
import { Id0001UnitService } from '../id0001-unit.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-sample',
  templateUrl: './search-sample.component.html',
  styleUrls: ['./search-sample.component.scss'],
})
export class SearchSampleComponent implements OnInit {
  // #reion インタフェース

  // #endregion

  // #region コンストラクタ・ライフサイクル

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private ownService: Id0001UnitService,
  ) {}

  ngOnInit(): void {
    // console.log('I am SearchSampleComponent.');
    // console.log(this.router);
    // console.log(this.activatedRoute);
  }

  // #endregion

  // #region ビューバインド

  getList() {
    return this.ownService.getList();
  }

  // #endregion

  // #region イベント

  search() {
    this.ownService.request();
  }

  // #endregion

  // #region プライベート

  // #endregion
}
