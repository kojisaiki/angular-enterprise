import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SearchSampleComponent } from './search-sample/search-sample.component';
import { EntitySampleComponent } from './entity-sample/entity-sample.component';

export const routes: Routes = [
  {
    path: '',
    component: SearchSampleComponent,
  },
  {
    path: ':id',
    component: EntitySampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Id0001UnitRoutingModule {}
