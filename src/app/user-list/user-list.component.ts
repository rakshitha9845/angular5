import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template:`
  <div class="container">
  <h1>Employee Interest form</h1>
  <div class="form-group">
  <label for="title">Enter your Name</label>
  <input type="text" class="form-control" id="title">
  </div>
  <div class="form-group">
  <label for="title">Enter your Department</label>
  <input type="text" class="form-control" id="title">
  </div>
  <div class="form-group">
  <label for="title">tell us little about yourself</label>
  <input type="" class="form-control" id="title">
  </div>
  <label>your favorite topics</label>
  <div class="group-one">
  <label class="checkbox-inline">
  <input type="checkbox" name="favoriteTopics" ng-model="formData.favoriteTopics.books">Books
  </label>
  <label class="checkbox-inline">
  <input type="checkbox" name="favoriteTopics" ng-model="formData.favoriteTopics.app">App
  </label>
  <label class="checkbox-inline">
  <input type="checkbox" name="favoriteTopics" ng-model="formData.favoriteTopics.onlineResource">Online Resource
  </label>
  `,
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
