import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ID0001_ROUTES, Id0001UnitModule } from './id0001-unit/id0001-unit.module';

export const SUBSYSTEM_ROUTES: Routes = [
  {
    path: 'id0001',
    children: ID0001_ROUTES
  }
]

@NgModule({
  imports: [
    CommonModule,
    Id0001UnitModule,
  ],
  declarations: [],
})
export class SubsystemModule { }
