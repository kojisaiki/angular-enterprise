import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SUBSYSTEM_ROUTES } from './subsystem/subsystem.module';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  {
    path: '',
    children: SUBSYSTEM_ROUTES,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
