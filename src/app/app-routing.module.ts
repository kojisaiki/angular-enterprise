import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { subsystem_routes } from './subsystem/subsystem-routing.module';

const routes: Routes = [
  {
    path: '',
    // children: subsystem_routes,

    loadChildren: './subsystem/subsystem-routing.module#SubsystemRoutingModule',
  },
];

export const testroutes: Routes = [
  {
    path: 'id0001',
    loadChildren:
      './subsystem/id0001-unit/id0001-unit-routing.module#Id0001UnitRoutingModule',
  },
  {
    path: 'id0002',
    loadChildren:
      'app/subsystem/id0002-rss-reader/id0002-rss-reader-routing.module#Id0002RssReaderRoutingModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
