import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'kegs-on-order',
  template: `
  <h1>Kegs on Order</h1>
  <div class="card-container">
    <div class="card" *ngFor="let currentKeg of childKegsOnOrder">
      <div class="on-order card-image waves-effect waves-block waves-light">
        <img class="activator" src="./resources/img/keg.png">
      </div>
      <div class="card-content">
        <h2 class="card-title">{{currentKeg.name}}</h2>
        <p>{{currentKeg.brand}} | {{currentKeg.style}}</p>
        <p>\${{currentKeg.price}} | {{currentKeg.abv}}% ABV</p>
        <p>{{currentKeg.quantity}} pints</p>
      </div>
    </div>
  </div>
`
})

export class KegsOnOrderComponent {
  @Input() childKegsOnOrder: Keg[];

}
