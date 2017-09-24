import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1 class="jumbotron">ZOOmAPP</h1>
    <div class="row">
      <div class="col-md-9">
        <label>View as:</label>
        <select (change)="onChange($event.target.value)" class="form-control form-control-lg">
          <option selected="selected" value="all">All Animals</option>
          <option value="young">All Young Animals</option>
          <option value="old">All Old Animals</option>
        </select>
      </div>
      <div class="col-md-3">
        <button class="btn btn-default btn-lg" (click)="clickAddAnimal()"><span class="add-plus">&nbsp;+<br></span>Add New Animal</button>
      </div>
    </div>
    <new-animal [childAddedAnimal]="addingAnimal" (newAnimalSender)="addAnimal($event)"></new-animal>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
    <animal-list [childAnimalList]="masterAnimals" (clickSender)="editAnimal($event)"></animal-list>

  </div>
  `
})

export class AppComponent {

  masterAnimals: Animal[] = [
    new Animal('/resources/images/arcticFox.jpg','Arctic Fox','Moon','10-13-2016','Carnivore','Northern Trail',5,'Female','Cool shade','Loud Noises'),
    new Animal('/resources/images/northwestBlackTailedDeer.jpg','Northwest Black Tailed Deer','Prince','11-25-2009','Carnivore','Northern Trail',5,'Male','Cool shade','Loud Noises'),
    new Animal('/resources/images/ocelot.jpg','Ocelot','Tinkerbell','01-01-2013','Carnivore','Northern Trail',5,'Female','Cool shade','Loud Noises'),
  ];

    selectedAnimal = null;
    addingAnimal = null;

  clickAddAnimal(){
    this.addingAnimal = true;
  }

  editAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimals.push(newAnimalFromChild);
    this.addingAnimal = null;
  }

}
