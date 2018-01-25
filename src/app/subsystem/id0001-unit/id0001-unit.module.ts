import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EntitySampleComponent } from './entity-sample/entity-sample.component';
import { SearchSampleComponent } from './search-sample/search-sample.component';
import { Id0001UnitService } from './id0001-unit.service';

export const ID0001_ROUTES: Routes = [
  {
    path: '',
    component: SearchSampleComponent,
  },
  {
    path: ':id',
    component: EntitySampleComponent,
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    SearchSampleComponent,
    EntitySampleComponent,
  ],
  exports: [
  ],
  providers: [
    Id0001UnitService,
  ]
})
export class Id0001UnitModule {
}
