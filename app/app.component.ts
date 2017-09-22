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
      <div class="well" *ngFor="let currentAnimal of animals">
        <div class="row">
          <div class="col-md-4">
            <img src="">
            <h3></h3>
          </div>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {

}

export class Animal {
  public dateNow: Date;
  public age: number;
  constructor(public images: string, public species: string, public name: string, public bday: Date, public diet: string, public location: string, public caretakers: number, public sex: string, public likes:string, public dislikes: string){
    this.dateNow = new Date();
    this.age = this.dateNow.getFullYear()-bday.getFullYear();
  }
}
