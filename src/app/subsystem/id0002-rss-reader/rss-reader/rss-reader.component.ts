import { Component, OnInit } from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-rss-reader',
  templateUrl: './rss-reader.component.html',
  styleUrls: ['./rss-reader.component.scss']
})
export class RssReaderComponent implements OnInit {

  result: any = 'no data';

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.http.get('https://symfony.com/roadmap.json')
    .pipe(
      delay(1000),
    )
    .subscribe((data) => {
      this.result = data;
    });
  }

}
