# ngx-nepali-number
Angular package that converts English numbers to Nepali numbers.

# Installation
Use Node Package Manager [npm]((https://www.npmjs.com)) to install ngx-nepali-number.
```
npm install ngx-nepali-number
```
# Usage
Import `NgxNepaliNumberModule` in the root module(`AppModule`):
```typescript
// Import module
import {NgxNepaliNumberModule} from 'ngx-nepali-number';

@NgModule({
  imports: [
    // ...
    NgxNepaliNumberModule.forRoot()
  ]
})
export class AppModule {}
```

Add `NgxNepaliNumberService` service wherever you want to use the `ngx-nepali-number`.

```typescript
import { NgxNepaliNumberService } from "ngx-nepali-number";

class AppComponent implements OnInit {
  constructor(private nepaliNumberService: NgxNepaliNumberService) {}

  ngOnInit() {
    //English number to convert into Nepali 
    const englishNumber: number = 12345;
    const nepaliNumber: string = this.nepaliNumberService.convertToNepaliNumber(englishNumber);
    console.log(nepaliNumber);
    //check output on console
    //१२३४५
  }
}
```

You can use `ngx-nepali-number` as both angular `pipe` & `directive`.
1. Using as angular `pipe` in your template
```html
    <p>The height of Mount Everest is {{ '8848' | nepaliNumber }} Meter.</p>
```
2. Using as angular `directive` in your template
```html
    Total Price:<input type="number" nepaliNumber/>
```
if you want to bind converted nepali number into your `formControl` name just pass `[formControl]` as Angular `Input`.

Component:
```typescript
//...
import { FormControl } from '@angular/forms';

class AppComponent implements OnInit {
 //FormControl for binding converted Nepali number 
 public totalPrice: FormControl = new FormControl();
  constructor() {}
  ngOnInit() {
    
  }
}
```
Template:
```html
    Total Price:<input type="number" nepaliNumber [formControl]="totalPrice"/>
    <p>You have entered {{ totalPrice.value }} as total price.</p>
```

## Creator

#### [Hikmat Sijapati](mailto:hikmatsijapati2014@gmail.com)

- [@GitHub](https://github.com/hikmat-sijapati)

### License
ngx-nepali-number is [MIT licensed](./LICENSE).
