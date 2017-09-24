import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div class="list-output" *ngIf="childAnimalToggle">
    <div class="form-group well view">
      <label>View as:</label>
      <select class="form-control"(change)="onChange($event.target.value)">
        <option selected="selected" value="all">All Animals</option>
        <option value="young">All Young Animals</option>
        <option value="old">All Old Animals</option>
      </select>
    </div>
    <div class="well" *ngFor="let currentAnimal of childAnimalList | sort:filter">
      <div class="row">
        <div class="col-md-4">
          <img src="{{currentAnimal.image}}" alt="no photo available">
          <p>{{currentAnimal.species}}</p>
        </div>
        <div class="col-md-4">
          <h3>&nbsp;{{currentAnimal.name}}</h3>
          <p>Age:&nbsp;{{getAge(currentAnimal.bday)}}</p>
          <p>Birthday:&nbsp;{{currentAnimal.bday}}</p>
          <p>Sex:&nbsp;{{currentAnimal.sex}}</p>
          <p>Number of caretakers:&nbsp;{{currentAnimal.caretakers}}</p>
        </div>
        <div class="col-md-4">
          <p>Location:&nbsp;{{currentAnimal.location}}</p>
          <p>Diet:&nbsp;{{currentAnimal.diet}}</p>
          <p>Likes:&nbsp;{{currentAnimal.likes}}</p>
          <p>Dislikes:&nbsp;{{currentAnimal.dislikes}}</p>
          <br><br>
          <button class="btn btn-success btn-lg" (click)="editAnimalButton(currentAnimal)">Edit!</button>
        </div>
      </div>
    </div>
  </div>
  `
})


export class AnimalListComponent {
  @Input() childAnimalToggle = true;
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  public currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  public age: number;
  public birthDates;

  filter: string = "all"

  editAnimalButton(animalToEdit: Animal){
    this.clickSender.emit(animalToEdit);
  }

  getAge(bday){
    this.birthDates = new Date(bday);
    let years = this.currentTime.getFullYear() - this.birthDates.getFullYear();
    if (this.currentTime.getMonth() < this.birthDates.getMonth()){
      years--;
    } else if (this.currentTime.getMonth() == this.birthDates.getMonth()){
      if(this.currentTime.getDate() < this.birthDates.getDate()){
        years--;
      }
    }
    return years;
  }


  onChange(optionFromMenu) {
    this.filter = optionFromMenu;
  }
}
