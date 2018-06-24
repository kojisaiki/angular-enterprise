import {
  Router,
  RoutesRecognized,
  ActivatedRouteSnapshot,
  ActivatedRoute,
} from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { filter } from 'rxjs/operators';
import { CoreModule } from '../core.module';
import { TreeNode } from '@angular/router/src/utils/tree';
import { ContextStackService } from '../context-stacker/context-stack.service';
import { PageContext } from '../context-stacker/page-context';

@Injectable()
export class ContextRouterService {
  constructor(private router: Router, private stacker: ContextStackService) {
    router.events
      .pipe(filter(e => e instanceof RoutesRecognized))
      .subscribe((e: RoutesRecognized) => {
        // TODO: Divide process between browser routing and Router routing.

        const _path = getPath(e.state.root);

        // Stack demanded page context.
        stacker.stack(new PageContext(_path, { name: 'yahoooooooo!' }));
        console.log(`stacker height: ${stacker.getHeight()}`);
      });
  }
}

function getPath(node: ActivatedRoute | ActivatedRouteSnapshot) {
  const c = node.children.length > 0 ? `/${getPath(node.children[0])}` : '';
  return `${node.routeConfig ? node.routeConfig.path : ''}${c}`;
}

const pageContextFactory = (
  activatedRoute: ActivatedRoute,
  stacker: ContextStackService,
) => {
  const _path = getPath(activatedRoute.root);
  return stacker.takeOff(_path);
};

export let pageContextProvider = {
  provide: PageContext,
  useFactory: pageContextFactory,
  deps: [ActivatedRoute, ContextStackService],
};
