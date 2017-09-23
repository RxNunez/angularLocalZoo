import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div class="well" *ngFor="let currentAnimal of childAnimalList">
    <div class="row">
      <div class="col-md-4">
        <img src="{{currentAnimal.image}}">
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
        <p>Likes:&nbsp;{{currentAnimal.likes}}</p>
        <p>Dislikes:&nbsp;{{currentAnimal.dislikes}}</p>
        <br><br>
        <button class="btn btn-success btn-lg" (click)="editAnimal(currentAnimal)">Edit!</button>
      </div>
    </div>
  </div>
  `
})


export class AnimalListComponent {
  @Input() childAnimalList: Animal[];

}
