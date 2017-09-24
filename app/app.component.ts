import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-default navbar-fixed-top well">
    <h1 class="title navbar-brand">ZOO<span class="mapp">mAPP !!!</span></h1>
    <button class="right btn btn-warning btn-lg" *ngIf="editIsClicked" (click)="clickAddAnimal()"><span class="add-plus">+</span>&nbsp;ADD</button>
  </nav>
  <div class="container">
    <animal-list [childAnimalList]="masterAnimals" [childAnimalToggle]="animalList" (clickSender)="editAnimal($event)"></animal-list>
    <new-animal [childAddedAnimal]="addingAnimal" (cancelAddButtonSender)= "cancelAdding()"(newAnimalSender)="addAnimal($event)"></new-animal>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (cancelButtonClickedSender)="cancelEditing()" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
  </div>
  `
})

export class AppComponent {

  masterAnimals: Animal[] = [
    new Animal('/resources/images/arcticFox.jpg','Arctic Fox','Moon','09-13-2015','Carnivore','Northern Trail',5,'Female','Cool shade','Loud Noises'),
    new Animal('/resources/images/northwestBlackTailedDeer.jpg','Northwest Black Tailed Deer','Prince','11-25-2002','Carnivore','Tropical Rain Forest Building',6,'Male','Laying in the sunshine','Toys that are not rope-based'),
    new Animal('/resources/images/ocelot.jpg','Ocelot','Tinkerbell','01-01-2013','Herbivore','Northern Trail',2,'Female','Delicate roots and leave','Loud Noises'),
  ];
    animalList = true;
    selectedAnimal = null;
    addingAnimal = null;
    editIsClicked = true;

  clickAddAnimal(){
    this.addingAnimal = true;
    this.animalList = false;
  }

  editAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
    this.animalList = false;
    this.editIsClicked=false;
  }

  finishedEditing() {
    this.selectedAnimal = null;
    this.animalList=true;
    this.editIsClicked=true;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimals.push(newAnimalFromChild);
    this.addingAnimal = null;
    this.animalList = true;
  }

  cancelEditing(){
    this.selectedAnimal=null;
    this.animalList=true;
    this.editIsClicked=true;
  }

  cancelAdding(){
    this.animalList=true;
    this.addingAnimal=null;
  }

}
