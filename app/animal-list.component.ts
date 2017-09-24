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
    <div class="well" id="output" *ngFor="let currentAnimal of childAnimalList | sort:filter">
      <div class="row">
        <div class="col-md-4">
          <img src="{{currentAnimal.image}}" alt="no photo available">
          <div class="species-edit">
            <h3>{{currentAnimal.species}}</h3>
          </div>
        </div>
        <div class="col-md-3">
          <h4>Name:</h4>
          <h4>Age:</h4>
          <h4>Birthday:</h4>
          <h4>Gender:</h4>
          <h4>Caretakers:</h4>
          <h4>Location:</h4>
          <h4>Diet:</h4>
          <h4>Likes:</h4>
          <h4>Dislikes:</h4>
        </div>
        <div class="col-md-5">
          <h4>{{currentAnimal.name}}</h4>
          <h4>{{getAge(currentAnimal.bday)}}</h4>
          <h4>{{currentAnimal.bday}}</h4>
          <h4>{{currentAnimal.sex}}</h4>
          <h4>{{currentAnimal.caretakers}}</h4>
          <h4>{{currentAnimal.location}}</h4>
          <h4>{{currentAnimal.diet}}</h4>
          <h4>{{currentAnimal.likes}}</h4>
          <h4>{{currentAnimal.dislikes}}</h4>
        </div>
        <button class="btn btn-success btn-lg edit" (click)="editAnimalButton(currentAnimal)"><img src="https://cdn3.iconfinder.com/data/icons/3d-printing-icon-set/512/Edit.png" id="pencil">&nbsp;Edit!</button>
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
