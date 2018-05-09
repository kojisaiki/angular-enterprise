import { TestBed, inject } from '@angular/core/testing';

import { MyHttpInterceptor } from './my-http-interceptor.service';

describe('MyHttpInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyHttpInterceptor]
    });
  });

  it(
    'should be created',
    inject([MyHttpInterceptor], (service: MyHttpInterceptor) => {
      expect(service).toBeTruthy();
    })
  );
});
