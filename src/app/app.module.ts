import { ContextRouterService } from './core/context-router/context-router.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SubsystemModule } from './subsystem/subsystem.module';
import { CoreModule } from './core/core.module';
import { ContextStackService } from './core/context-stacker/context-stack.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    CoreModule,
    SubsystemModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
