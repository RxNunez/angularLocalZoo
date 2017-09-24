import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-default navbar-fixed-top well">
    <h1 class="title navbar-brand">ZOO<span class="mapp">mapper</span></h1>
    <button class="right btn btn-warning btn-lg" (click)="clickAddAnimal()"><span class="add-plus">+</span>&nbsp;ADD</button>
  </nav>
  <div class="container">
    <animal-list [childAnimalList]="masterAnimals" [childAnimalToggle]="animalList" (clickSender)="editAnimal($event)"></animal-list>
    <new-animal [childAddedAnimal]="addingAnimal" (newAnimalSender)="addAnimal($event)"></new-animal>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
  </div>
  `
})

export class AppComponent {

  masterAnimals: Animal[] = [
    new Animal('/resources/images/arcticFox.jpg','Arctic Fox','Moon','10-13-2016','Carnivore','Northern Trail',5,'Female','Cool shade','Loud Noises'),
    new Animal('/resources/images/northwestBlackTailedDeer.jpg','Northwest Black Tailed Deer','Prince','11-25-2009','Carnivore','Northern Trail',5,'Male','Cool shade','Loud Noises'),
    new Animal('/resources/images/ocelot.jpg','Ocelot','Tinkerbell','01-01-2013','Carnivore','Northern Trail',5,'Female','Cool shade','Loud Noises'),
  ];
    animalList = true;
    selectedAnimal = null;
    addingAnimal = null;

  clickAddAnimal(){
    this.addingAnimal = true;
    this.animalList = false;
  }

  editAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
    this.animalList = false;
  }

  finishedEditing() {
    this.selectedAnimal = null;
    this.animalList=true;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimals.push(newAnimalFromChild);
    this.addingAnimal = null;
    this.animalList = true;
  }

}
