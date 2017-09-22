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
        <button class="btn btn-default btn-lg"><span class="add-plus">&nbsp;+<br></span>Add New Animal</button>
      </div>
    </div>
    <hr>

    <div class="form-group row">

      <div class="col-md-6">
        <h2>EDIT FORM</h2>
        <h3>{{selectedAnimal.species}}</h3>
        <img src={{selectedAnimal.image}}>
      </div>
      <div class="col-md-6">
        <label>Edit species:</label>
        <input class="form-control"[(ngModel)]="selectedAnimal.species">
        <label>Edit image URL:</label>
        <input type="url" class="form-control" [(ngModel)]="selectedAnimal.image">
        <label>Edit name:</label>
        <input class="form-control"[(ngModel)]="selectedAnimal.name">
        <label>Edit location:</label>
        <input class="form-control"[(ngModel)]="selectedAnimal.location">
        <label>Edit sex:</label>
        <input class="form-control"[(ngModel)]="selectedAnimal.sex">
        <label>Edit caretakers:</label>
        <input class="form-control"[(ngModel)]="selectedAnimal.caretakers">
        <label>Edit likes:</label>
        <input class="form-control"[(ngModel)]="selectedAnimal.likes">
        <label>Enter dislikes:</label>
        <input class="form-control"[(ngModel)]="selectedAnimal.dislikes"><br>
        <button class="btn btn-primary btn-lg">Submit</button>
      </div>
    </div>

    <div class="well" *ngFor="let currentAnimal of masterAnimals">
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
          <button class="btn btn-success btn-lg" (click)="editAnimal()">Edit!</button>
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
  public birthDates;


  masterAnimals: Animal[] = [
    new Animal('/resources/images/arcticFox.jpg','Arctic Fox','Moon','10-13-2016','Carnivore','Northern Trail',5,'Female','Cool shade','Loud Noises'),
    new Animal('/resources/images/northwestBlackTailedDeer.jpg','Northwest Black Tailed Deer','Prince','11-25-2009','Carnivore','Northern Trail',5,'Male','Cool shade','Loud Noises'),
    new Animal('/resources/images/ocelot.jpg','Ocelot','Tinkerbell','01-01-2013','Carnivore','Northern Trail',5,'Female','Cool shade','Loud Noises'),
  ];

    selectedAnimal: Animal = this.masterAnimals[0];

  getAge(bday){
    this.birthDates = new Date(bday);
    return this.age = this.currentTime.getFullYear()-this.birthDates.getFullYear();
  }

  editAnimal(){
    alert("edit cliked")
  }

}

export class Animal {

  constructor(public image: string, public species: string, public name: string, public bday: string, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string){
  }
}
