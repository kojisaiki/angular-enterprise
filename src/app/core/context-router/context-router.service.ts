import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule,
})
export class ContextRouterService {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log('construct ContextRouterService');
    router.events
      // .pipe(filter(e => e instanceof RoutesRecognized))
      .subscribe((e: RoutesRecognized) => {
        console.log('RoutesRecognized');
        console.log(e);
      });
  }
}
