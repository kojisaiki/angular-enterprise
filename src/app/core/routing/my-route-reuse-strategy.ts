import { Injectable } from '@angular/core';
import {
  RouteReuseStrategy,
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
} from '@angular/router';

@Injectable()
export class MyRouteReuseStrategy implements RouteReuseStrategy {
  handles: { [key: string]: DetachedRouteHandle } = {};

  constructor() {}

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // To Be Implemented
    console.log('RouteReuseStrategy::shouldDetach-----------');
    console.log(route);
    console.log('stored...');
    console.log(this.handles);
    return true;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    // To Be Implemented
    console.log('RouteReuseStrategy::store-----------');
    console.log(route);
    console.log(handle);
    this.handles[getPath(route.root)] = handle;
    console.log('stored...');
    console.log(this.handles);
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    // To Be Implemented
    console.log('RouteReuseStrategy::shouldAttach-----------');
    console.log(route);
    console.log('stored...');
    console.log(this.handles);

    if (this.handles[getPath(route.root)]) {
      console.log('cache exists!');
      return true;
    }

    console.log('cache not exists...');

    return false;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    // To Be Implemented
    console.log('RouteReuseStrategy::retrieve-----------');
    const data = this.handles[getPath(route.root)];
    if (!data) {
      console.log('Cannot get cache');
    }
    return data;
  }

  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot,
  ): boolean {
    // To Be Implemented
    console.log('RouteReuseStrategy::shouldReuseRoute-----------');
    if (future.routeConfig === curr.routeConfig) {
      console.log('Reuse according to Angular default.');
      return true;
    }

    console.log('Check custom caching store.');
    return false;
  }
}

function getPath(node: ActivatedRouteSnapshot) {
  const c = node.children.length > 0 ? `/${getPath(node.children[0])}` : '';
  return `${node.routeConfig ? node.routeConfig.path : ''}${c}`;
}
