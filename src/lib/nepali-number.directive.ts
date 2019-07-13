import { FormControl } from '@angular/forms';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgxNepaliNumberService } from './ngx-nepali-number.service';

@Directive({
  selector: '[nepaliNumber]'
})
export class NepaliNumberDirective {

  /**
   * FormControl to bind converted value on change
   *
   * @type {FormControl}
   */
  @Input() public formControl: FormControl;

  constructor(private elementRef: ElementRef, private nepaliNumberService: NgxNepaliNumberService) { }

  /**
   * On change event convert value
   */
  @HostListener('input') oninput() {
    const elementValue = this.elementRef.nativeElement.value;
    const nepaliValue = this.nepaliNumberService.convertToNepaliNumber(elementValue);
    if(elementValue) {
      this.elementRef.nativeElement.value = nepaliValue;
    }
    
    /**
     * If formcontrol value passed
     */
    if(this.formControl) {
      this.formControl.setValue(nepaliValue);
    }
  }
}
