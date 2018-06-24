import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RssReaderComponent } from './rss-reader/rss-reader.component';
import { Id0002RssReaderRoutingModule } from './id0002-rss-reader-routing.module';

@NgModule({
  imports: [CommonModule, Id0002RssReaderRoutingModule],
  declarations: [RssReaderComponent],
})
export class Id0002RssReaderModule {}
