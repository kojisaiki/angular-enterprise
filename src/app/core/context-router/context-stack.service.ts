import { Injectable } from '@angular/core';
import { PageContext } from './page-context';

@Injectable({
  providedIn: 'root',
})
export class ContextStackService {
  constructor() {}

  // interfaces

  /**
   * Stack a new page context.
   *
   * @param context The page you will move to.
   */
  stack(context: PageContext): void {
    // TODO:
  }

  /**
   * Get specified PageContext and fix top of stack with the PageContext.
   *
   * If contextId is not found, return null.
   * If found, it returns PageContext and deletes stacked PageContexts on the specified PageContext.
   *
   * @param contextId Desired context id.
   */
  takeOff(contextId: string): PageContext {
    // TODO:

    return new PageContext();
  }
}
