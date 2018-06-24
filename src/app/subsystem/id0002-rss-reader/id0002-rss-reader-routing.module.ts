import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RssReaderComponent } from './rss-reader/rss-reader.component';

export const routes: Routes = [
  {
    path: '',
    component: RssReaderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Id0002RssReaderRoutingModule {}
