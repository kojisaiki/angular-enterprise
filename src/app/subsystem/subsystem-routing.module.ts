import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const subsystem_routes: Routes = [
  {
    path: 'id0001',
    loadChildren:
      './id0001-unit/id0001-unit-routing.module#Id0001UnitRoutingModule',
  },
  {
    path: 'id0002',
    loadChildren:
      './id0002-rss-reader/id0002-rss-reader-routing.module#Id0002RssReaderRoutingModule',
  },
];

@NgModule({
  imports: [RouterModule.forChild(subsystem_routes)],
  exports: [RouterModule],
})
export class SubsystemRoutingModule {}
