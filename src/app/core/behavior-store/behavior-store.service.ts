import { Injectable } from '@angular/core';
import { Cache, CacheType } from './cache';

/**
 * シングルページアプリケーションのために、ページ間で画面上の振る舞いを維持・管理するサービス
 */
@Injectable()
export class BehaviorStoreService {
  constructor() {}

  /**
   * キャッシュに保存する。
   *
   * @param cache キャッシュデータ
   */
  save(cache: Cache): void {
    localStorage.setItem(
      this.generateStorageKey(cache.behaviorId, cache.cacheType),
      JSON.stringify(cache.content),
    );
  }

  /**
   * キャッシュからデータを取り出す。
   *
   * @param behaviorId 取得したい振る舞いのID
   * @param cacheType キャッシュの種類
   * @returns キャッシュデータ、存在しないか有効でない場合はnullを返す
   */
  load(behaviorId: string, cacheType: CacheType): Cache {
    const content = localStorage.getItem(
      this.generateStorageKey(behaviorId, cacheType),
    );
    if (!content) {
      return null;
    }

    return <Cache>{
      behaviorId: behaviorId,
      cacheType: cacheType,
      content: content,
    };
  }

  private generateStorageKey(behaviorId: string, cacheType: CacheType): string {
    switch (cacheType) {
      case CacheType.DataTableList:
        return 'list-' + behaviorId;
      case CacheType.SearchCondition:
        return 'condition-' + behaviorId;
      case CacheType.TransactionInput:
        return 'input-' + behaviorId;
      default:
        return 'any-' + behaviorId;
    }
  }
}
