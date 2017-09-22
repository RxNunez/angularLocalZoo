import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1 class="jumbotron">ZOOmAPP</h1>
    <div class="row">
      <div class="col-md-10">
        <label>View as:</label>
        <select (change)="onChange($event.target.value)">
          <option selected="selected" value="all">All Animals</option>
          <option value="young">All Young Animals</option>
          <option value="old">All Old Animals</option>
        </select>
      </div>
      <div class="col-md-2">
        <button class="btn btn-default">Add New Animal<span class="add-plus">&nbsp;+</span></button>
      </div>
    </div>
      <div class="well" *ngFor="let currentAnimal of masterAnimals">
        <div class="row">
          <div class="col-md-4">
            <img src="{{currentAnimal.images}}">
            <p>{{currentAnimal.species}}</p>
          </div>
          <div class="col-md-6">
            <h3>&nbsp;{{currentAnimal.name}}</h3>
            <p>Age:&nbsp;{{getAge(currentAnimal.bday)}}</p>
            <p>Birthday:&nbsp;{{currentAnimal.bday}}</p>
            <p>Sex:&nbsp;{{currentAnimal.sex}}</p>
            <p>Number of caretakers:&nbsp;{{currentAnimal.caretakers}}</p>
            <p>Location:&nbsp;{{currentAnimal.location}}</p>
            <p>Likes:&nbsp;{{currentAnimal.likes}}</p>
            <p>Dislikes:&nbsp;{{currentAnimal.dislikes}}</p>
          </div>
          <div class="col-md-2">
            <button class="btn btn-success">EDIT</button>
          </div>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  public age: number;


  masterAnimals: Animal[] = [
    new Animal('/resources/images/arcticFox.jpg','Arctic Fox','Moon','10-13-2016','Carnivore','Northern Trail',5,'Female','Cool shade','Loud Noises'),
    new Animal('/resources/images/northwestBlackTailedDeer.jpg','Northwest Black Tailed Deer','Moon','2010-10-13','Carnivore','Northern Trail',5,'Female','Cool shade','Loud Noises'),
    new Animal('/resources/images/ocelot.jpg','Ocelot','Moon','2010-10-13','Carnivore','Northern Trail',5,'Female','Cool shade','Loud Noises'),
  ];

  public birthDates;

  getAge(bday){
    this.birthDates = new Date(bday);
    return this.age = this.currentTime.getFullYear()-this.birthDates.getFullYear();

  }
}

export class Animal {

  constructor(public images: string, public species: string, public name: string, public bday: string, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string){

  }
}
