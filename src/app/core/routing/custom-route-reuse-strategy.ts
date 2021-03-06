import { Injectable } from '@angular/core';
import {
  RouteReuseStrategy,
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
} from '@angular/router';
import { ContextStackService } from '../context-stacker/context-stack.service';
import { PageContext } from '../context-stacker/page-context';

@Injectable()
export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  constructor(private stacker: ContextStackService) {}

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    console.log(
      `RouteReuseStrategy::shouldDetach for[${getPath(route.root)}]-----------`,
    );

    console.log('stack height:' + this.stacker.getHeight());
    return true;
  }

  store(
    route: ActivatedRouteSnapshot,
    handle: DetachedRouteHandle | null,
  ): void {
    console.log(
      `RouteReuseStrategy::store for[${getPath(route.root)}]-----------`,
    );

    if (handle) {
      const newpage = new PageContext(getPath(route.root), handle);
      this.stacker.stack(newpage);
      console.log('stored!');
      console.log(newpage);
    } else {
      console.log('handle is ' + handle);
    }
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    console.log(
      `RouteReuseStrategy::shouldAttach for[${getPath(route.root)}]-----------`,
    );

    if (this.stacker.contains(getPath(route.root))) {
      console.log('context exists!');
      return true;
    }
    console.log('context not exists...');
    return false;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    console.log(
      `RouteReuseStrategy::retrieve for[${getPath(route.root)}]-----------`,
    );

    const page = this.stacker.takeOff(getPath(route.root));
    if (!page) {
      console.log('Cannot get context');
      return null;
    }
    console.log(page);
    page.data.componentRef.instance['code'] = 'japan!';
    return page.data;
  }

  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot,
  ): boolean {
    console.log('------------------future');
    console.log(future);
    console.log('------------------current');
    console.log(curr);
    if (future.routeConfig === curr.routeConfig) {
      return true;
    }
    return false;
  }
}

function getPath(node: ActivatedRouteSnapshot) {
  const c = node.children.length > 0 ? `/${getPath(node.children[0])}` : '';
  return `${node.routeConfig ? node.routeConfig.path : ''}${c}`;
}
