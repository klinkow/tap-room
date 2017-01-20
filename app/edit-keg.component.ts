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
    <delete-keg [childSelectedKeg]="childSelectedKeg" (deleteSender)="deleteKeg($event)"></delete-keg>
  </div>
  `
})


export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() deleteSender = new EventEmitter();

  deleteKeg($event) {
    this.deleteSender.emit($event);
  }

}
