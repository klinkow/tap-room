import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'delete-keg',
  template: `
    <a (click)="deleteBeer(childSelectedKeg)" class="waves-effect waves-light btn">delete</a>
  `
})


export class DeleteKegComponent {
  @Input() childSelectedKeg: Keg;
  @Input() childKegList: Keg[];

  deleteBeer(beer) {

    if (confirm("Are you sure you want to delete this beer?")) {
    alert("you fool!");
    this.childKegList.splice(this.childKegList.indexOf(beer), 1);
    }

  }
}
