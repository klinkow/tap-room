import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `

  <div class="card" *ngFor="let currentKeg of childKegList">
    <div class="card-image waves-effect waves-block waves-light">
      <div [class]="fillLevel(currentKeg)" [style.height.%]="(currentKeg.quantity/124)*100"></div>
      <img class="activator" src="./resources/img/keg.png">
    </div>
    <div class="card-content">
    <span class='card-title activator grey-text text-darken-4'><a (click)="infoButtonClicked(currentKeg)" class="btn-floating btn-med waves-effect waves-light orange right"><i class="material-icons">info</i></a></span>
    <span class='card-title activator grey-text text-darken-4'><a (click)="editKeg(currentKeg)" class="btn-floating btn-med waves-effect waves-light red right"><i class="material-icons">mode_edit</i></a></span>
      <h2 class="card-title">{{currentKeg.name}}</h2>
      <p>{{currentKeg.brand}} | {{currentKeg.style}}</p>
      <p>\${{currentKeg.price}} | {{currentKeg.abv}}% ABV</p>
      <p>{{currentKeg.quantity}} pints</p>
      <br>
      <a (click)="subtractPint(currentKeg)" class="btn center waves-effect waves-light blue">pint</a>
      <a (click)="subtractGrowler(currentKeg)" class="btn center waves-effect waves-light green">growler</a>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>

      <div *ngIf="descriptionShow">
        <h5>{{currentKeg.name}}</h5>
        <p>{{currentKeg.description}}</p>
      </div>
      <edit-keg *ngIf="editShow" (clickSender)="editKeg($event)" [childSelectedKeg]="currentKeg" [childKegList]="childKegList"></edit-keg>

    </div>
  </div><!--end of card-->
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Input() childKegsOnOrder: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  selectedKeg = null;

  fillLevel(keg) {
    if (keg.quantity < 32) {
      return "keg-low";
    } else if (keg.style === "Stout" || keg.style === "Porter") {
      return "keg-dark";
    } else if (keg.style === "Red" || keg.style === "Amber" || keg.style === "Saison") {
      return "keg-red";
    } else {
      return "keg-gold";
    }
  }

  subtractPint(currentKeg) {
    if (currentKeg.quantity > 1) {
      currentKeg.quantity -= 1;
    } else if (currentKeg.quantity === 1) {
      currentKeg.quantity -= 1;
      this.childKegList.splice(this.childKegList.indexOf(currentKeg), 1);
      this.childKegsOnOrder.push(currentKeg);
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
      this.childKegList.splice(this.childKegList.indexOf(currentKeg), 1);
      this.childKegsOnOrder.push(currentKeg);
      alert("this Keg is out of beer!");
    } else {
      alert("There is not enough beer for a growler!");
    }
  }

  descriptionShow : boolean = false;
  editShow :boolean = false;

  editKeg(currentKeg) {
    this.selectedKeg = currentKeg;
    this.editShow = true;
    this.descriptionShow = false;
  }


  infoButtonClicked(currentKeg) {
    this.selectedKeg = currentKeg;
    this.descriptionShow = true;
    this.editShow = false;

    // this.description = true;
  }

  updateKeg() {
    this.selectedKeg = null;
  }


}
