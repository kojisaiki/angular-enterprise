import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpInterceptor } from './my-http-interceptor';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [provideHttpInterceptor()],
})
export class CoreModule {}
