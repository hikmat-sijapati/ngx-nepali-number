import { NgModule, ModuleWithProviders } from '@angular/core';
import { NepaliNumberDirective } from './nepali-number.directive';
import { NepaliNumberPipe } from './nepali-number.pipe';

@NgModule({
  declarations: [NepaliNumberDirective, NepaliNumberPipe],
  imports: [
  ],
  exports: [NepaliNumberDirective, NepaliNumberPipe]
})
export class NgxNepaliNumberModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxNepaliNumberModule,
      providers: []
    };
  }
}
