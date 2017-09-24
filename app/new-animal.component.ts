import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <hr>
  <div class="form-group row well" *ngIf="childAddedAnimal">
    <div class="col-md-6">
      <h2>ADD FORM</h2>
      <label>Edit species:</label>
      <input class="form-control" #newAnimalSpecies>
      <label>Edit image URL:</label>
      <input class="form-control" #newAnimalImage>
      <label>Edit name:</label>
      <input class="form-control" #newAnimalName>
      <label>Edit bday (MM-DD-YYY):</label>
      <input class="form-control" #newAnimalBday>
    </div>
    <div class="col-md-6">
      <label>Edit location:</label>
      <input class="form-control" #newAnimalLocation>
      <label>Edit Diet:</label>
      <input class="form-control" #newAnimalDiet>
      <label>Edit sex:</label>
      <input class="form-control" #newAnimalSex>
      <label>Edit caretakers:</label>
      <input class="form-control" #newAnimalCaretakers>
      <label>Edit likes:</label>
      <input class="form-control" #newAnimalLikes>
      <label>Enter dislikes:</label>
      <input class="form-control" #newAnimalDislikes><br>
      <button class="btn btn-primary btn-lg" (click)="submitForm(newAnimalImage.value, newAnimalSpecies.value, newAnimalName.value,  newAnimalBday.value, newAnimalDiet.value, newAnimalLocation.value, newAnimalCaretakers.value, newAnimalSex.value, newAnimalLikes.value, newAnimalDislikes.value); newAnimalImage.value=''; newAnimalSpecies.value=''; newAnimalName.value='';  newAnimalBday.value=''; newAnimalDiet.value=''; newAnimalLocation.value=''; newAnimalCaretakers.value=''; newAnimalSex.value=''; newAnimalLikes.value=''; newAnimalDislikes.value='';">Add +</button>
    </div>
  </div>
  `
})

export class NewAnimalComponent {
  @Input() childAddedAnimal = true;
  @Output() newAnimalSender = new EventEmitter();

  submitForm(image: string, species: string, name: string,  bday: string, diet: string, location: string, caretakers: number,  sex: string, likes: string, dislikes: string){
    var newAnimalToAdd: Animal = new Animal(image, species, name,  bday, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
