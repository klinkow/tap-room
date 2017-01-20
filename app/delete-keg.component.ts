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
  @Output() deleteSender = new EventEmitter();

  deleteBeer(keg) {

    if (confirm("Are you sure you want to delete this beer?")) {
    this.deleteSender.emit({keg:keg});

    }

  }
}
