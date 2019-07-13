
import { Injectable } from '@angular/core';
import { numberMapping } from './mapping';

/**
 * Nepali Number Service that converts provided text of numbers into nepali number
 *
 */
@Injectable({
  providedIn: 'root'
})
export class NgxNepaliNumberService {

  /**
   * Default Constructor
   */
  constructor() { }

  /**
   * Function that converts english numbers from provided text into nepali number text
   * @param input Input
   */
  public convertToNepaliNumber(input: string | number): string | number {
    let output = input;
    output = input.toString().replace(/\d/g, (matched) => {
      return numberMapping[matched];
    });
    return output;
  }
}
