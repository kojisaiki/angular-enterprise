import {
  Router,
  RoutesRecognized,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { filter } from 'rxjs/operators';
import { CoreModule } from '../core.module';
import { TreeNode } from '@angular/router/src/utils/tree';

@Injectable()
export class ContextRouterService {
  constructor(private router: Router) {
    console.log('construct ContextRouterService');
    router.events
      .pipe(filter(e => e instanceof RoutesRecognized))
      .subscribe((e: RoutesRecognized) => {
        console.log(e);
        console.log(getPath(e.state.root));
      });
  }
}

function getPath(node: ActivatedRouteSnapshot) {
  const c =
    node.children.length > 0 ? `/${node.children.map(getPath).join(', ')}` : '';
  return `${node.routeConfig ? node.routeConfig.path : ''}${c}`;
}
