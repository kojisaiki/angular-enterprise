import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RssReaderComponent } from './rss-reader/rss-reader.component';

export const ID0002_ROUTES: Routes = [
  {
    path: '',
    component: RssReaderComponent,
  },
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RssReaderComponent]
})
export class Id0002RssReaderModule { }
