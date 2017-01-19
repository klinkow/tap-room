import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'new-keg',
  template: `

  <h4>New Keg</h4>
  <form>
    <div class="input-field col s6">
      <input #beerName id="beer_name" type="text" class="validate">
      <label for="beer_name">Beer Name</label>
    </div>

    <div class="input-field col s6">
      <input #beerBrand id="beer_brand" type="text" class="validate">
      <label for="beer_brand">Beer Brand</label>
    </div>


    <div class="input-field col s12">
      <input #beerStyle id="beer_style" type="text" class="validate">
      <label for="beer_style">Beer Type</label>
    </div>

    <div class="input-field col s12">
      <input #beerDescription id="beer_description" type="text" class="validate">
      <label for="beer_description">Beer Description</label>
    </div>

    <div class="input-field col s12">
      <input #beerAbv id="abv" type="text" class="validate">
      <label for="abv">ABV</label>
    </div>

    <div class="input-field col s12">
      <input #beerPrice id="price" type="text" class="validate">
      <label for="price">Price</label>
    </div>

    <div class="input-field col s12">
      <input #beerQuanity id="quantity" type="text" class="validate">
      <label for="quantity">Number of Pints</label>
    </div>

    <a (click)="submitForm(beerName.value, beerBrand.value, beerStyle.value, beerQuantity.value, beerAbv.value, beerPrice.value, beerDescription.value)" class="btn center waves-effect waves-light blue">OK</a>

  </form>

  `
})

export class NewKegComponent {
  @Input() childKegList: Keg[];

  submitForm(name: string, brand: string, style: string, quantity: number, abv: number, price: number, description: string)  {
    var newKegToAdd: Keg = new Keg(name, brand, style, quantity, abv, price, description);
    this.childKegList.push(newKegToAdd);
  }
}
