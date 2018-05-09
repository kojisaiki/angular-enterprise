import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from './my-http-interceptor.service';
import { Provider } from '@angular/core';

export function provideHttpInterceptor(): Provider[] {
  return [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true
    }
  ];
}
