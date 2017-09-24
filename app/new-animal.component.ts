import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <hr>
  <div class="form-group row">
    <div class="col-md-6">
      <h2>ADD FORM</h2>
      <label>Edit species:</label>
      <input class="form-control" #newAnimalSpecies>
      <label>Edit image URL:</label>
      <input type="url" class="form-control" #newAnimalImage>
      <label>Edit name:</label>
      <input class="form-control" #newAnimalName>
      <label>Edit bday (MM-DD-YYY):</label>
      <input class="form-control" #newAnimalBday>
    </div>
    <div class="col-md-6">
      <label>Edit location:</label>
      <input class="form-control" #newAnimalLocation>
      <label>Edit sex:</label>
      <input class="form-control" #newAnimalSex>
      <label>Edit caretakers:</label>
      <input class="form-control" #newAnimalCaretakers>
      <label>Edit likes:</label>
      <input class="form-control" #newAnimalLikes>
      <label>Enter dislikes:</label>
      <input class="form-control" #newAnimalDislikes><br>
      <button class="btn btn-primary btn-lg" (click)="submitForm(newAnimalSpecies.value, newAnimalName.value, newAnimalImage.value, newAnimalBday.value, newAnimalSex.value, newAnimalLocation.value, newAnimalCaretakers.value, newAnimalLikes.value, newAnimalDislikes.value) newAnimalSpecies.value=''; newAnimalName.value=''; newAnimalImage.value=''; newAnimalBday.value=''; newAnimalSex.value=''; newAnimalLocation.value=''; newAnimalCaretakers.value=''; newAnimalLikes.value=''; newAnimalDislikes.value='';">Add +</button>
    </div>
  </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(image: string, species: string, name: string,  bday: string, diet: string, location: string, caretakers: number,  sex: string, likes: string, dislikes: string){
    var newAnimalToAdd: Animal = new Animal(image, species, name,  bday, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

}
