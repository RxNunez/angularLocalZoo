import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div class="form-group row well add-form" *ngIf="childAddedAnimal">
    <div class="col-md-6">
      <h2>ADD FORM</h2>
      <label>Add species:</label>
      <input class="form-control" #newAnimalSpecies>
      <label>Add image URL:</label>
      <input class="form-control" #newAnimalImage>
      <label>Add name:</label>
      <input class="form-control" #newAnimalName>
      <label>Add bday (MM-DD-YYY):</label>
      <input class="form-control" #newAnimalBday>
      <button class="btn btn-danger btn-lg cancel" (click)="cancelAddButtonClicked()">X Cancel Add</button>
    </div>
    <div class="col-md-6">
      <label>Add location:</label>
      <input class="form-control" #newAnimalLocation>
      <label>Add Diet:</label>
      <input class="form-control" #newAnimalDiet>
      <label>Add sex:</label>
      <input class="form-control" #newAnimalSex>
      <label>Add caretakers:</label>
      <input class="form-control" #newAnimalCaretakers>
      <label>Add likes:</label>
      <input class="form-control" #newAnimalLikes>
      <label>Add dislikes:</label>
      <input class="form-control" #newAnimalDislikes><br>
      <button class="btn btn-primary btn-lg add" (click)="submitForm(newAnimalImage.value, newAnimalSpecies.value, newAnimalName.value,  newAnimalBday.value, newAnimalDiet.value, newAnimalLocation.value, newAnimalCaretakers.value, newAnimalSex.value, newAnimalLikes.value, newAnimalDislikes.value); newAnimalImage.value=''; newAnimalSpecies.value=''; newAnimalName.value='';  newAnimalBday.value=''; newAnimalDiet.value=''; newAnimalLocation.value=''; newAnimalCaretakers.value=''; newAnimalSex.value=''; newAnimalLikes.value=''; newAnimalDislikes.value='';">Add +</button>
    </div>
  </div>
  `
})

export class NewAnimalComponent {
  @Input() childAddedAnimal = true;
  @Output() newAnimalSender = new EventEmitter();
  @Output() cancelAddButtonSender = new EventEmitter();

  submitForm(image: string, species: string, name: string,  bday: string, diet: string, location: string, caretakers: number,  sex: string, likes: string, dislikes: string){
    var newAnimalToAdd: Animal = new Animal(image, species, name,  bday, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

  cancelAddButtonClicked(){
    this.cancelAddButtonSender.emit();
  }
}
