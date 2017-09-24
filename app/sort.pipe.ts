import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "sort",
  pure: false
})


export class SortPipe implements PipeTransform {
  public currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  public age: number;
  public birthDates;
  getAge(bday){
    this.birthDates = new Date(bday);
    return this.age = this.currentTime.getFullYear()-this.birthDates.getFullYear();
  }

  transform(input: Animal[], sortAnimal) {
    var output: Animal[] = [];
    if(sortAnimal === "young") {
      for (var i = 0; i < input.length; i++) {
        if (this.getAge(input[i].bday) <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (sortAnimal === "old") {
      for (var i = 0; i < input.length; i++) {
        if (this.getAge(input[i].bday) > 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }



}
