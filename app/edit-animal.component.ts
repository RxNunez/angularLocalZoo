import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div class="form-group row well edit-form" *ngIf="childSelectedAnimal">
    <div class="col-md-6">
      <h2>EDIT FORM</h2>
      <h3>{{childSelectedAnimal.species}}</h3>
      <img src={{childSelectedAnimal.image}}>
      <button class="btn btn-danger btn-lg cancel" (click)="cancelButtonClicked()">Cancel Edit</button>
    </div>
    <div class="col-md-6">
      <label>Edit species:</label>
      <input class="form-control"[(ngModel)]="childSelectedAnimal.species">
      <label>Edit image (Paste new URL):</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.image">
      <label>Edit name:</label>
      <input class="form-control"[(ngModel)]="childSelectedAnimal.name">
      <label>Edit bday (MM-DD-YYYY):</label>
      <input class="form-control"[(ngModel)]="childSelectedAnimal.bday">
      <label>Edit location:</label>
      <input class="form-control"[(ngModel)]="childSelectedAnimal.location">
      <label>Edit sex:</label>
      <input class="form-control"[(ngModel)]="childSelectedAnimal.sex">
      <label>Edit caretakers:</label>
      <input class="form-control"[(ngModel)]="childSelectedAnimal.caretakers">
      <label>Edit likes:</label>
      <input class="form-control"[(ngModel)]="childSelectedAnimal.likes">
      <label>Enter dislikes:</label>
      <input class="form-control"[(ngModel)]="childSelectedAnimal.dislikes"><br>
      <button class="btn btn-primary btn-lg submit" (click)="doneButtonClicked()">Submit</button>
    </div>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();
  @Output() cancelButtonClickedSender = new EventEmitter();

  doneButtonClicked(){
    this.doneButtonClickedSender.emit();
  }

  cancelButtonClicked(){
    this.cancelButtonClickedSender.emit();
  }
}
