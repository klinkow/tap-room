import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Tap Room</h1>
  <table>
    <thead>
      <th>Beer</th>
      <th>Brand</th>
      <th>Style</th>
      <th>Price</th>
      <th>ABV</th>
      <th>Description</th>
      <th>Beer's Left</th>
    </thead>
    <tr *ngFor="let currentKeg of kegs">
      <td><button (click)="editKeg(currentKeg)">Edit</button></td>
      <td>{{currentKeg.name}}</td>
      <td>{{currentKeg.brand}}</td>
      <td>{{currentKeg.style}}</td>
      <td>\${{currentKeg.price.toFixed(2)}}</td>
      <td>{{currentKeg.abv}}%</td>
      <td>{{currentKeg.description}}</td>
      <td>{{currentKeg.quantity}} pints</td>
      <td><button (click)="subtractPint(currentKeg)">Pint</button></td>
      <td><button (click)="subtractGrowler(currentKeg)">Growler</button></td>
    </tr>
  </table>

  <div *ngIf="selectedKeg">
    <input [(ngModel)]="selectedKeg.name">
    <input [(ngModel)]="selectedKeg.brand">
    <input [(ngModel)]="selectedKeg.style">
    <input [(ngModel)]="selectedKeg.price">
    <input [(ngModel)]="selectedKeg.abv">
    <input [(ngModel)]="selectedKeg.description">
    <input [(ngModel)]="selectedKeg.quantity">
    <button (click)="updateKeg()" type="button">Submit</button>
  </div>

  <h1>Kegs on Order</h1>
  <table>
    <thead>
      <th>Beer</th>
      <th>Brand</th>
      <th>Style</th>
    </thead>
    <tr *ngFor="let currentKeg of kegsOnOrder">
      <td>{{currentKeg.name}}</td>
      <td>{{currentKeg.brand}}</td>
      <td>{{currentKeg.style}}</td>
    </tr>
  </table>


  `
})

export class AppComponent {

  kegs: Keg[] = [
    new Keg("Total Domination", "Ninkasi", "IPA", 5, 6.7, 5, "A delightful blend of citrus and floral hop notes dominate the senses while a trio of malt adds a clean finish."),
    new Keg("Vanilla Oatis", "Ninkasi", "Oatmeal Stout", 124, 7, 5, "A divine blend of vanilla, coffee, chocolate, and roasted malt notes swirl together to create a smooth Oatmeal Stout with a crisp finish."),
    new Keg("Milk Stout Nitro", "Left Hand Brewing", "Sweet Stout", 2, 6, 5.5, "Dark & delicious, America’s great milk stout will change your perception about what a stout can be.")
  ];

  kegsOnOrder : Keg[] = [];
  selectedKeg = null;

  subtractPint(currentKeg) {
    if (currentKeg.quantity > 1) {
      currentKeg.quantity -= 1;
    } else if (currentKeg.quantity === 1) {
      currentKeg.quantity -= 1;
      this.kegs.splice(this.kegs.indexOf(currentKeg), 1);
      this.kegsOnOrder.push(currentKeg);
      alert("this Keg is out of beer!");
    } else {
      alert("this Keg is out of beer!");
    }
  }

  subtractGrowler(currentKeg) {
    if (currentKeg.quantity > 4) {
      currentKeg.quantity -= 4;
    } else if (currentKeg.quantity === 4) {
      currentKeg.quantity -= 4;
      this.kegs.splice(this.kegs.indexOf(currentKeg), 1);
      this.kegsOnOrder.push(currentKeg);
      alert("this Keg is out of beer!");
    } else {
      alert("There is not enough beer for a growler!");
    }
  }

  editKeg(currentKeg) {
    this.selectedKeg = currentKeg;
  }

  updateKeg() {
    this.selectedKeg = null;
  }



}


export class Keg {

  constructor(public name: string, public brand: string, public style: string, public quantity: number, public abv: number, public price: number, public description: string) { }
}
