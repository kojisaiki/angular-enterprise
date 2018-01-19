import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SubsystemModule } from './subsystem/subsystem.module';
import { SampleComponent } from './sample/sample.component';


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SubsystemModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
