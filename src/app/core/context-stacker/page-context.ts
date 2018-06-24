export class PageContext {
  constructor(_contextId: string, _data: any = {}) {
    this.contextId = _contextId;
    this.data = _data;
  }

  /**
   * Identifier of PageContext.
   *
   * Using URL is preferabled.
   */
  contextId: string;

  /**
   * Some data stored to PageContext.
   *
   * Being used as data cache is preferabled.
   *
   * e.g.
   * - List data cache of search result.
   * - Input data cache used in the case like input-page => confirm-page.
   */
  data: any;
}
