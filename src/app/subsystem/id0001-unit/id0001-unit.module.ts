import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EntitySampleComponent } from './entity-sample/entity-sample.component';
import { SearchSampleComponent } from './search-sample/search-sample.component';

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
  ],
  declarations: [
    SearchSampleComponent,
    EntitySampleComponent,
  ],
  exports: [
  ]
})
export class Id0001UnitModule {
}
