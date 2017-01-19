import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div>
    <label>Name</label>
    <input [(ngModel)]="childSelectedKeg.name">
    <label>Brand</label>
    <input [(ngModel)]="childSelectedKeg.brand">
    <label>Style</label>
    <input [(ngModel)]="childSelectedKeg.style">
    <label>Price</label>
    <input [(ngModel)]="childSelectedKeg.price">
    <label>ABV</label>
    <input [(ngModel)]="childSelectedKeg.abv">
    <label>Description</label>
    <input [(ngModel)]="childSelectedKeg.description">
    <label>Quantity</label>
    <input [(ngModel)]="childSelectedKeg.quantity">
    <a (click)="deleteBeer(childSelectedKeg)" class="waves-effect waves-light btn">delete</a>
  </div>
  `
})


export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Input() childKegList: Keg[];

  deleteBeer(beer) {

    if (confirm("Are you sure you want to delete this beer?")) {
    alert("you fool!");
    this.childKegList.splice(this.childKegList.indexOf(beer), 1);
    }

  }
}
