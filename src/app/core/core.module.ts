import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from './my-http-interceptor/my-http-interceptor.service';
import { provideHttpInterceptor } from './my-http-interceptor';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [provideHttpInterceptor()]
})
export class CoreModule {}
