import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { Id0001UnitModule } from './id0001-unit/id0001-unit.module';
import { Id0002RssReaderModule } from './id0002-rss-reader/id0002-rss-reader.module';
import { SubsystemRoutingModule } from './subsystem-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SubsystemRoutingModule,
    Id0001UnitModule,
    Id0002RssReaderModule,
  ],
  declarations: [],
})
export class SubsystemModule {}
