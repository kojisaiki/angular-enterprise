import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ID0001_ROUTES, Id0001UnitModule } from './id0001-unit/id0001-unit.module';
import { ID0002_ROUTES, Id0002RssReaderModule } from './id0002-rss-reader/id0002-rss-reader.module';

export const SUBSYSTEM_ROUTES: Routes = [
  {
    path: 'id0001',
    children: ID0001_ROUTES
  },
  {
    path: 'id0002',
    children: ID0002_ROUTES
  },
]

@NgModule({
  imports: [
    CommonModule,
    Id0001UnitModule,
    Id0002RssReaderModule,
  ],
  declarations: [],
})
export class SubsystemModule { }
