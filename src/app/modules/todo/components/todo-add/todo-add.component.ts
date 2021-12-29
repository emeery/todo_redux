import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  todoInput: FormControl;
  constructor() {
    this.todoInput = new FormControl('', Validators.required)
  }

  ngOnInit() {}

}

