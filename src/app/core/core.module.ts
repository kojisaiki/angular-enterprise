import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpInterceptor } from './my-http-interceptor';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ContextRouterService } from './context-router/context-router.service';
import { ContextStackService } from './context-stacker/context-stack.service';
import { PageContext } from './context-stacker/page-context';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [],
  providers: [
    provideHttpInterceptor(),
    {
      provide: ContextStackService,
      useValue: new ContextStackService(),
    },
    {
      provide: ContextRouterService,
      useFactory: () =>
        new ContextRouterService(inject(Router), inject(ContextStackService)),
    },
  ],
})
export class CoreModule {}
