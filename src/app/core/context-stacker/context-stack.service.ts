import { Injectable } from '@angular/core';
import { PageContext } from './page-context';
import { CoreModule } from '../core.module';

@Injectable()
export class ContextStackService {
  constructor() {
    console.log('construct ContextStackService');
  }

  private _stack: PageContext[] = [];

  // interfaces

  /**
   * Stack a new page context.
   *
   * @param context The page you will move to.
   */
  stack(context: PageContext): void {
    this._stack.push(context);
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
    for (let i = this._stack.length - 1; i >= 0; i--) {
      if (this._stack[i].contextId === contextId) {
        const subject = this._stack[i];
        this._stack = this._stack.slice(0, i + 1);
        return subject;
      }
    }

    // Context clear when accessed to a new page.
    this._stack = [];

    return null;
  }

  getHeight(): number {
    return this._stack.length;
  }
}
