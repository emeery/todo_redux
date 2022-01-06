import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { throwIfEmpty } from 'rxjs';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo|any
  task: FormControl
  completed: FormControl
  edit: boolean = false
  constructor() { }

  ngOnInit(): void {
    console.log(this.todo)
    this.setControls()
  }

  setControls() {
    this.task = new FormControl(this.todo.task,Validators.required)
    this.completed = new FormControl(this.todo.completed)
  }

  onEdit() {
    this.edit = true
    console.log('hehe');
  }
}

