import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitySampleComponent } from './entity-sample/entity-sample.component';
import { SearchSampleComponent } from './search-sample/search-sample.component';
import { Id0001UnitService } from './id0001-unit.service';
import { Id0001UnitRoutingModule } from './id0001-unit-routing.module';

@NgModule({
  imports: [CommonModule, Id0001UnitRoutingModule],
  declarations: [SearchSampleComponent, EntitySampleComponent],
  exports: [],
  providers: [Id0001UnitService],
})
export class Id0001UnitModule {}
