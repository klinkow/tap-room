import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { KegListComponent }  from './keg-list.component';
import { EditKegComponent } from './edit-keg.component';
import { KegsOnOrderComponent } from './kegs-on-order.component';
import { NewKegComponent } from './new-keg.component';
import { DeleteKegComponent } from './delete-keg.component';
import { StyleCheckPipe } from './stylecheck.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
                  KegListComponent,
                  EditKegComponent,
                  KegsOnOrderComponent,
                  NewKegComponent,
                  DeleteKegComponent,
                  StyleCheckPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
