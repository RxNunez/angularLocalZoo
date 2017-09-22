import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1 class="jumbotron">ZOOmAPP</h1>
    <div class="row well">
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
  </div>
  `
})

export class AppComponent {

}
