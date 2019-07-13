import { Pipe, PipeTransform } from '@angular/core';
import { NgxNepaliNumberService } from './ngx-nepali-number.service';

@Pipe({
  name: 'nepaliNumber'
})
export class NepaliNumberPipe implements PipeTransform {
  constructor(private nepaliNumberService: NgxNepaliNumberService) {}

  transform(value: string | number): string | number {
    return this.nepaliNumberService.convertToNepaliNumber(value);
  }

}
