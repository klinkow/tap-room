import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <new-keg [childKegList]="masterKegList"></new-keg>
  <div class="container">

    <h1>Tap Room</h1>


    <keg-list [childKegList]="masterKegList" [childKegsOnOrder]="masterKegsOnOrder"></keg-list>

    <kegs-on-order [childKegsOnOrder]="masterKegsOnOrder"></kegs-on-order>
    </div>

  `
})

export class AppComponent {

  masterKegList: Keg[] = [
    new Keg("Total Domination", "Ninkasi", "IPA", 1, 6.7, 5, "A delightful blend of citrus and floral hop notes dominate the senses while a trio of malt adds a clean finish."),
    new Keg("Vanilla Oatis", "Ninkasi", "Stout", 124, 7, 5, "A divine blend of vanilla, coffee, chocolate, and roasted malt notes swirl together to create a smooth Oatmeal Stout with a crisp finish."),
    new Keg("Milk Stout Nitro", "Left Hand Brewing", "Stout", 2, 6, 5.5, "Dark & delicious, America’s great milk stout will change your perception about what a stout can be."),
    new Keg("Ripstop Rye Pils", "Base Camp", "Pilsner", 60, 5.7, 4.5, "Aromas of European malt and noble-type hops mingle with a dignified, refreshing, and clean malt character that is further distinguished with a generous addition of spicy rye malt, creating a beer that is at once zesty, crisp, hoppy, and incredibly drinkable."),
    new Keg("Belgian Strong Dark", "Pfriem", "Ale", 40, 10, 6, "This beer has complex flavors of fig dipped in dark chocolate with ripe fruit and toffee."),
    new Keg("Voodoo Doughnut Grape Guerrilla", "Rogue", "Ale", 124, 7.5, 3, "This ale was inspired by the Voodoo Doughnut Grape Ape doughnut, a creation that features vanilla frosting, grape dust and purple sprinkles."),
    new Keg("Hit The Hay", "Temescal", "Saison", 124, 5, 5, "A light saison with notes of coconut.")
  ];

  masterKegsOnOrder : Keg[] = [
      new Keg("Hit The Hay", "Temescal", "Saison", 0, 5, 5, "A light saison with notes of coconut.")
  ];


}
