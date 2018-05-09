export enum CacheType {
  /**
   * 一覧検索系で検索した結果
   */
  DataTableList,

  /**
   * 一覧検索系の検索条件
   */
  SearchCondition,

  /**
   * 単票入力系の入力データ
   */
  TransactionInput,
}

/**
 * 入力中の検索条件、結果データといったストアに格納するアプリケーションの挙動中データです
 */
export class Cache {
  behaviorId: string;
  cacheType: CacheType;
  content: any;
}
