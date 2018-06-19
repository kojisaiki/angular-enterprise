import { Component, OnInit } from '@angular/core';
import { AngularEmitter } from 'kuker-emitters';
import { Router, ActivatedRoute } from '@angular/router';
import { ContextRouterService } from './core/context-router/context-router.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private contextRouter: ContextRouterService,
  ) {
    AngularEmitter();
  }

  ngOnInit(): void {
    // console.log('I am AppComponent.');
    // console.log(this.router);
    // console.log(this.activatedRoute);
  }
}
