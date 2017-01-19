import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "aleCheckPipe",
  pure: false
})


export class StyleCheckPipe implements PipeTransform {

  transform(input: Keg[]){
    var output: Keg[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].style === "Stout" || input[i].style=== "Porter") {
        output.push(input[i]);
      }
    }
    return output;
  }


}
