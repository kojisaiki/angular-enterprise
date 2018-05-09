import { Component } from '@angular/core';
import { AngularEmitter } from 'kuker-emitters';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

  constructor() {
    AngularEmitter();
  }
}
